const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const path = require('path')

// __dirname = /Users/warren/Code/AIMing-For-Success/build/server


const app = express()
  .use(bodyParser.json())
  .use(express.static(path.resolve(__dirname + '/../shell')))
  .use('/users', router)

module.exports = app
