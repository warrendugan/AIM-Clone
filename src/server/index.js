const bodyParser = require('body-parser')
const router = require('./router')
const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const { PORT } = process.env

app
  .use(bodyParser.json())
  .use(express.static(path.resolve(__dirname + '/../client')))
  .use('/users', router)

server.listen(PORT || 3000, () => {
  console.log(`Listening on port ${PORT || 3000}`) // eslint-disable-line
})

io.on('connection', socket => {
  console.log('got connected') // eslint-disable-line
  socket.on('new window', () => {
    console.log('new window almost ready') //eslint-disable-line
  })
})
