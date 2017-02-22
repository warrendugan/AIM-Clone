/* global io */

const store = require('../store')

const roomSubscribed = room => ({ type: 'ROOM-SUBSCRIBED', room })

const messageSocketed = message => ({ type: 'MESSAGE-SOCKETED', message })

const socket = io.connect()

const createChatRoom = buddy => (dispatch, getState) => {
  const { selectedUser } = getState()
  var room = [buddy, selectedUser]
  room.sort()
  room = room[0].concat(room[1])
  socket.emit('subscribe', room)
  dispatch(roomSubscribed(room))
}

const sendMessage = message => (dispatch, getState) => {
  const { room, selectedUser } = getState()

  socket.emit('message from client', ({ message, room , selectedUser}))
  dispatch(messageSocketed('me: ' + message))
}

socket.on('message from server', ({ message, sender }) => {
  store.dispatch(messageSocketed(sender + ': ' + message))
})


module.exports = {
  sendMessage,
  createChatRoom
}
