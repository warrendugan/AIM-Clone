/* global io */

const messageSocketed = message => ({ type: 'MESSAGE-SOCKETED', message })

const sendMessage = message => (dispatch, getState) => {
  const { currentUser, room } = getState()

  var { socket } = getState()
  console.log(socket) // eslint-disable-line
  if(!socket) {
    socket = io.connect()
  }

  socket.emit('new message', ({ message, room }))

  socket.on('message', ({ message }) => {
    console.log(currentUser, 'got this', message) // eslint-disable-line
    dispatch(messageSocketed(message))
  })
}

module.exports = {
  sendMessage
}
