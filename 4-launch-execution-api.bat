@echo off
title execution-api
java -jar execution-api-3.5.0.jar --spring.data.mongodb.uri=mongodb://localhost:27017/leap --app.auth.client.url=http://localhost:2020/ --app.dashboard.client.url=http://localhost:2022/