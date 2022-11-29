import argparse
import re
import os
import joblib
from sklearn.model_selection import train_test_split
from flask import Flask, request, jsonify
import logging
import pandas as pd
from failureanalyzer import DataCreation, ModelCreation, UploadJson, Vectorization

app = Flask(__name__)
logging.basicConfig(level=logging.DEBUG, filename='app.log', filemode='w',
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logging = logging.getLogger(__name__)


@app.route('/train_model')
def train():
    try:
        status_map = {}
        train_model()
        status_map["status"] = 200
        status_map["error"] = "Success"
        status_map["message"] = "Success"
        return status_map
    except Exception as e:
        status_map["status"] = 405
        status_map["error"] = e.__cause__
        status_map["message"] = "error"
        logging.error(e.__cause__)
        return status_map


@app.route('/predict_exception', methods=['POST'])
def predictexception():
    try:
        status_map = {}
        jsondata = request.get_json()
        predictionlist = predict_json(jsondata)
        return jsonify(predictionlist)
    except Exception as e:
        status_map["status"] = 405
        status_map["error"] = e.__cause__
        status_map["message"] = "error"
        logging.error("Error While Prediction", e.__cause__)
        return status_map


@app.route('/upload_retrain', methods=['POST'])
def retrainmodel():
    try:
        jsondata = request.get_json()
        output = upload(jsondata)
        train_model()
        return output
    except Exception as e:
        logging.error(e.__cause__)
        return output


@app.route('/retrain', methods=['POST'])
def retrain():
    try:
        status_map = {}
        jsondata = request.get_json()
        retrain_model(jsondata)
        status_map["status"] = 200
        status_map["error"] = "Success"
        status_map["message"] = "Success"
        return status_map

    except Exception as e:
        status_map["status"] = 405
        status_map["error"] = e.__cause__
        status_map["message"] = "error"
        logging.error(e.__cause__)
        return status_map


@app.route('/predictions')
def predictions():
    try:
        map = {}
        predictions_data = joblib.load(os.getcwd() + "/../models/predictions.pkl")
        predictions_list = []
        print(predictions_data)
        for item in predictions_data:
            predictions_list.append(item)

        map["predictionList"] = predictions_list
        return jsonify(map)
    except Exception as e:
        logging.error(e.__cause__)
        map["predictionList"] = e.__cause__
        return map


def train_model():
    # dset = DataCreation(os.getcwd() + "\\..\\inputs\\training_logdata.csv")
    dset = DataCreation(os.getcwd() + "/../inputs/training_logdata.csv")
    dset.get_dataset()
    data = dset.get_dataset()
    nlp_data = data['clean_log']
    X_train, X_test, y_train, y_test = train_test_split(data['clean_log'], data['Failure_Type'], test_size=0.2,
                                                        random_state=0)

    vec_obj = Vectorization()

    x_train_vectors = vec_obj.create_vectors(X_train)
    x_test_vectors = vec_obj.do_transform(X_test)

    model = ModelCreation()
    model.train(x_train_vectors, y_train)

    y_pred = model.predict(x_test_vectors)
    joblib.dump(data.Failure_Type.unique(), os.getcwd() + "/../models/predictions.pkl")

    model.accuracy(y_test, y_pred)
    joblib.dump(nlp_data, os.getcwd() + "/../models/nlpdata.pkl")


def retrain_model(jsondata):
    dset = DataCreation(os.getcwd() + "/../inputs/training_logdata.csv")
    df_retrain = pd.DataFrame(jsondata['trainingInformation'])
    data = dset.get_retrain_dataset(df_retrain)
    nlp_data = data['clean_log']
    X_train, X_test, y_train, y_test = train_test_split(data['clean_log'], data['failureType'], test_size=0.2,
                                                        random_state=0)

    vec_obj = Vectorization()

    x_train_vectors = vec_obj.create_vectors(X_train)
    x_test_vectors = vec_obj.do_transform(X_test)

    model = ModelCreation()
    model.train(x_train_vectors, y_train)

    y_pred = model.predict(x_test_vectors)
    joblib.dump(data.failureType.unique(), os.getcwd() + "/../models/predictions.pkl")
    model.accuracy(y_test, y_pred)
    joblib.dump(nlp_data, os.getcwd() + "/../models/nlpdata.pkl")


def predict_json(jsondata):
    logging.info("Predicting for given json")

    classifier = joblib.load(os.getcwd() + "/../models/classifier.pkl")
    vec_obj = Vectorization()

    sessionid = jsondata['sessionInformation']['sessionId']

    predict_final_map = {}
    predictionlist = []
    response_map = {}

    response_map["sessionId"] = sessionid
    predict_final_map["sessionInformation"] = response_map

    dset = DataCreation(None)

    try:
        for key in jsondata['logInformation']:
            predictionmap = {"uniqueId": key['uniqueId'], "testcaseName": key['testcaseName'],
                             "parentId": key['parentId']}
            log = key['logDescription']

            text_stemmed = dset.clean_up(log)

            if dset.is_text_nlp_data(text_stemmed):
                # Below transform accepts only list, so adding []
                predict_vector = vec_obj.do_transform([text_stemmed])
                predict_str = str(classifier.predict(predict_vector))
                match_predict = re.findall(r"'(.*?)'", predict_str, re.DOTALL)
                predictionmap["prediction"] = match_predict
                print(match_predict)
            else:
                temp_list = []
                temp_list.append("To Evaluate")
                predictionmap["prediction"] = temp_list
                print("To Evaluate")

            predictionlist.append(predictionmap)
    except Exception as e:
        logging.error("Error while predicting given json response", e.__cause__)

    predict_final_map["predictionInformation"] = predictionlist

    return predict_final_map


def upload(jsondata):
    try:
        upload_map = {}
        uploadobj = UploadJson(jsondata, os.getcwd() + "/../inputs/training_logdata.csv")
        uploadobj.append_data_csv()
        upload_map["status"] = 200
        upload_map["error"] = "Success"
        upload_map["message"] = "Success"
        return upload_map
    except Exception as e:
        upload_map["status"] = 405
        upload_map["error"] = e.__cause__
        upload_map["message"] = "error"
        logging.error(e.__cause__)
        return upload_map


def predict_value(text):
    dset = DataCreation(None)
    vec_obj = Vectorization()
    classifier = joblib.load(os.getcwd() + "/../models/classifier.pkl")

    text_stemmed = dset.clean_up(text)

    if dset.is_text_nlp_data(text_stemmed):
        predict_vector = vec_obj.do_transform(text_stemmed)
        print(classifier.predict(predict_vector))
    else:
        print("To Evaluate")


def main():
    # construct the argument parse and parse the arguments
    ap = argparse.ArgumentParser()
    ap.add_argument("-a", "--api", required=False,
                    help="Launch as service")
    ap.add_argument("-t", "--train", required=False,
                    help="Training the model")
    ap.add_argument("-n", "--input", required=False,
                    help="Input the String for prediction")
    arguments = vars(ap.parse_args())

    if arguments['train']:
        train_model()
    elif arguments['input']:
        predict_value(arguments['input'])
    elif arguments['api']:
        logging.info("Starting the webservice")
        port = arguments['api']
        app.run(debug=True, port=port)  # run app in debug mode on port 5000


if __name__ == '__main__':
    main()
