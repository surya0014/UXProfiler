from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
import pickle
import os
import joblib


class Vectorization:

    def __init__(self):
        self.vectorizer = TfidfVectorizer()
        self.path = os.getcwd() + "/../models/vectorized.pkl"

    def create_vectors(self, x_data):
        fitted_obj = self.vectorizer.fit(x_data)
        joblib.dump(self.vectorizer, self.path)
        vectors = fitted_obj.transform(x_data)
        return vectors

    def do_transform(self, x_data):
        fitted_obj = joblib.load(self.path)
        vectors = fitted_obj.transform(x_data)
        return vectors
