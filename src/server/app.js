const express = require('express')
const bodyParser = require('body-parser')

const app = express()
  .use(bodyParser.json())
  .use('/', (req, res) => { res.sendStatus(200) })

module.exports = app
