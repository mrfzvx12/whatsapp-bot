#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install mc
apt-get install ffmpeg
npm install

echo "DONE INSTALLING ALL PACKAGE REQUIRE, Use npm start"
