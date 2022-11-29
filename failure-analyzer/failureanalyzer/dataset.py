import pandas as pd
import re
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
import logging
import joblib
import os

logging.basicConfig(level=logging.DEBUG, filename='app.log', filemode='w',
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logging = logging.getLogger(__name__)


class DataCreation:

    def __init__(self, train_dir):
        logging.info("Initializing Data Training")
        self.train_dir = train_dir
        self.ps = PorterStemmer()
        self.all_stopwords = stopwords.words('english')

    def get_dataset(self):
        logging.info("Preparing to read Training Data")
        try:
            dataset = pd.read_csv(self.train_dir, engine='python')
            dataset['clean_log'] = dataset['Failure_Log'].apply(self.clean_up)

            logging.info("Data Trained Successfully")
        except Exception as e:
            logging.error("Error while reading the Training Data csv", e.__cause__)

        return dataset
        
    def get_retrain_dataset(self, df_retrain):
        logging.info("Preparing to Retraining  Data")
        try:
            df_retrain['clean_log'] = df_retrain['failureLog'].apply(self.clean_up)
            logging.info("Retrain Data cleaned")
        except Exception as e:
            logging.error("Error while cleaning retrain data", e.__cause__)

        return df_retrain
        

    def clean_up(self, logtext):
        logtext = str(logtext)
        logtext = re.sub('[^a-zA-Z]', ' ', logtext)
        logtext = logtext.lower()
        logtext = logtext.split()
        logtext = [self.ps.stem(word) for word in logtext if not word in set(self.all_stopwords)]
        logtext = ' '.join(logtext)
        return logtext

    def is_text_nlp_data(self, text):
        found = False
        nlp_data = joblib.load(os.getcwd() + "/../models/nlpdata.pkl")
        split_text = text.split()
        for eachData in nlp_data:
            trainEachData = eachData.split()
            common = set(split_text).intersection(set(trainEachData))
            if len(common) != 0:
                found = True
                break
        return found
