@echo off
title selfheal-api
java -jar selfheal-api-3.5.0.jar --spring.data.mongodb.uri=mongodb://localhost:27017/leap --app.auth.client.url=http://localhost:2020/