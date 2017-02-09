#!/bin/bash
rm -rf ./build/
cp -R ./src/ ./build/
browserify -t babelify ./src/client/index.js -o ./build/client/bundle.js
