**Failure Analyzer**

Steps for installation & testing

1. Navigate to folder & run the below

`pip install -e .`

2. Execute below command, this will run the webservice in http://127.0.0.1:5000

`python cmd.py -a 5000`

3. Use the below service/api call to train & dump the model

`http://127.0.0.1:5000/train_model`

4. Use beloe service/api call to predict the given json

`http://127.0.0.1:5000/predict-exception`

Use below JSON as body for request

`{
  "sessionInformation": {
    "sessionId": "5e7352ad4bf53a844e920639"
  },
  "logInformation": [
    {
      "uniqueId": "TestCase1",
      "testcaseName": "TestCase1",
      "logDescription": "java.lang.NullPointerException",
       "parentId" : "parent1"
    },
    {
      "uniqueId": "TestCase2",
      "testcaseName": "TestCase2",
      "logDescription": "No Element exception Selenium",
       "parentId" : "parent1"
    },
    {
      "uniqueId": "TestCase3",
      "testcaseName": "TestCase3",
      "logDescription": "orq.selenium StaleElement exception",
      "parentId" : "parent1"
    },
    {
      "uniqueId": "TestCase4",
      "testcaseName": "TestCase4",
      "logDescription": "String index out of range",
      "parentId" : "parent1"
    },
    {
      "uniqueId": "TestCase5",
      "testcaseName": "TestCase5",
      "logDescription": "JSOUp",
      "parentId" : "parent1"
    }
  ]
}`

5. We can retrain the model with new failure log & it's respective failure type by calling below api with json response which contains new training data

`http://127.0.0.1:5000/upload_retrain`


Use below JSON for POST request

`{
  "trainingInformation": [
    {
      "failureLog": "CRAFT",
      "failureType": "CRAFT"
    },
    {
      "failureLog": "CITS",
      "failureType": "CITS"
    },
    {
      "failureLog": "JSOUP",
      "failureType": "JSOUP"
    }
  ]
}`

6. Get list of Predictions use below API


`http://127.0.0.1:5000/predictions`


7. Retraining completely with new set of Data

Use below API - POST Request

`http://127.0.0.1:5000/retrain`

Use below JSON


`{
  "trainingInformation": [
    {
      "failureLog": "CRAFT",
      "failureType": "CRAFT"
    },
    {
      "failureLog": "CITS",
      "failureType": "CITS"
    },
    {
      "failureLog": "JSOUP",
      "failureType": "JSOUP"
    }
  ]
}`






## Installing in Linux Environment

1. Update Python:

`$ sudo apt-get update
$ sudo apt-get install python3.6`

2. check the python version:
`$ python3 --version`

3. Install pip3:
`$ sudo apt install python3-pip`

4. Clone the failure analyzer from git
5. perform the below command to install modules,
`$  pip3 install -e .`

6. Install below modules:
`pip3 install pandas
pip3 install joblib
pip3 install sklearn
pip3 install Flask
pip3 install nltk`

7. Use below command to start the server,
`$ python3 cmd.py -a 5000`



