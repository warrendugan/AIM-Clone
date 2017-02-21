/* global io */

const messageSocketed = message => ({ type: 'MESSAGE-SOCKETED', message })

const sendMessage = message => (dispatch, getState) => {
  const { currentUser, room } = getState()

  var { socket } = getState()
  if(!socket) {
    socket = io.connect()
  }

  socket.emit('new message', ({ message, room }))

  socket.on('message', (data) => {
    console.log(currentUser, 'got this', data) // eslint-disable-line
    dispatch(messageSocketed(data))
  })
}

module.exports = {
  sendMessage
}
