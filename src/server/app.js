const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const path = require('path')
const app = express()
app
  .use(bodyParser.json())
  .use(express.static(path.resolve(__dirname + '/../client')))
  .use('/users', router)
