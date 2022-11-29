#!/bin/bash
kill $(cat ./$1.file) && rm $1.out