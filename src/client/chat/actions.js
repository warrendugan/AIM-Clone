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
  const { room } = getState()

  socket.emit('message from client', ({ message, room }))

}

const receiveMessage = message => dispatch => {
  dispatch(messageSocketed(message))

}

socket.on('message from server', message => {
  console.log('got this', message) // eslint-disable-line
  // receiveMessage(message)
  store.dispatch({ type: 'MESSAGE-SOCKETED', message })
})


module.exports = {
  sendMessage,
  receiveMessage,
  createChatRoom
}
