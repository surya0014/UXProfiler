import pandas as pd
import os
from sklearn.metrics import confusion_matrix, accuracy_score
from sklearn.svm import LinearSVC
import joblib
import logging

logging.basicConfig(level=logging.DEBUG, filename='app.log', filemode='w',
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logging = logging.getLogger(__name__)


class ModelCreation:

    def __init__(self):
        self.classifier = None
        self.classifier_path = os.getcwd() + "/../models/classifier.pkl"

    def train(self, X_train, y_train):
        logging.info("Training the machine learning model started")
        try:
            self.classifier = LinearSVC(class_weight='balanced', random_state=0)
            self.classifier.fit(X_train, y_train)
            joblib.dump(self.classifier, self.classifier_path)
            logging.info("Model Trained Successfully")
        except Exception as e:
            logging.error("Failed to train the model", e.__cause__)

    def predict(self, X_test):
        logging.info("Predicting the model")
        classifier = joblib.load(self.classifier_path)
        y_pred = classifier.predict(X_test)
        return y_pred

    def accuracy(self, y_test, y_pred):
        logging.info("Predicting the accuracy")
        cm = confusion_matrix(y_test, y_pred)
        print(accuracy_score(y_test, y_pred))
        pd.crosstab(y_test, y_pred)
        return cm
