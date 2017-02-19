/* global io */
var socket = io.connect()
socket.emit('new message', { message: "Something else" })
