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

io.sockets.on('connection', socket => {
  console.log('got connected') // eslint-disable-line
  socket.on('subscribe', room => {
    console.log('joining room ', room) // eslint-disable-line
    socket.join(room) // eslint-disable-line
  })
  socket.on('new message', ({ message, room }) => {
    console.log('new message', message, room) // eslint-disable-line
    socket.to(room).emit('message', message)
  })
})
