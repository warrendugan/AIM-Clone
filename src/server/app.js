const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')

const app = express()
  .use(bodyParser.json())
  .use('/', (req, res) => {
    res.sendStatus(200)
  })
  .use('/users', router)

module.exports = app
