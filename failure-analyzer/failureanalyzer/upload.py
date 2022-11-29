import csv
import logging

logging.basicConfig(level=logging.DEBUG, filename='app.log', filemode='w',
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logging = logging.getLogger(__name__)


class UploadJson:

    def __init__(self, jsondata, train_dir):
        self.jsondata = jsondata
        self.train_dir = train_dir

    def append_data_csv(self):
        logging.info("Updating the train data set")
        try:
            with open(self.train_dir, 'a', newline='') as csvfile:
                writer = csv.writer(csvfile)
                for item in self.jsondata['trainingInformation']:
                    writer.writerow([item['failureLog'], item['failureType']])
        except Exception as e:
            logging.error("Error while updating the training Data set", e.__cause__)
