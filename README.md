### Pre requisites
* JAVA JDK 11 & above
* Nginx 1.1.8.X & above
* mongo db 4.X & above
* Robo 3T

### Configuring Mongo DB
* Install Mongo DB
* For better user experience, use Robo 3T & create database called "leap"
* Use Robo 3T shell, insert below script & run in the shell
```
mongo-base-db.js
tools-base-db.js
migrate-ciqd-db.js
migrate-v3.5.0-db.js
```
* Other JS files in the folder, please ignore. Please CCTP team for any support

### Launching services

* Run the below bat file, this will start the all 6 apis. Make sure ports 2020,2021,2022,2023, 2024, 2025, 2026 are available
```
start-all.bat
```
* You can also use the below bat file to stop all services
```
stop-all.bat
```
### Configuring Nginx & UI

* Download the nginx & navigate to nginx.conf
* Copy the leap.conf under binaries-> nginx into nginx.conf.
* Make sure to copy the server component alone
* once copied , please edit the root configuration to the path where ui is placed. It will be under binaries-> public
* Open Command prompt , navigate to folder where nginx is available. Enter below command
```
start nginx
```


#### OLD DATA BELOW ###################

## Stop all the servers
```
./stop.sh auth-api-3.0.0.jar
./stop.sh workbench-api-3.0.0.jar
./stop.sh execution-api-3.0.0.jar
./stop.sh dashboard-api-3.0.0.jar
```

## Start all the servers
```
nohup ./start.sh auth-api-3.0.0.jar &> auth-api-3.0.0.jar.out &
nohup ./start.sh workbench-api-3.0.0.jar &> workbench-api-3.0.0.jar.out &
nohup ./start.sh execution-api-3.0.0.jar &> execution-api-3.0.0.jar.out &
nohup ./start.sh dashboard-api-3.0.0.jar &> dashboard-api-3.0.0.jar.out &
```

## Script for stop and start
```
cat > stop.sh
#!/bin/bash
kill $(cat ./$1.file) && rm $1.out
```

```
#!/bin/bash
java -jar $1 --spring.data.mongodb.uri=mongodb://leap-api:leap-new-api_1947@localhost:27017/leap --app.auth.client.url=http://localhost:2020/ --app.dashboard.client.url=http://localhost:2022/ & echo $! > ./$1.file &
```
