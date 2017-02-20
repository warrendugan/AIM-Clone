/* global io */
const userUnselected = ({ type: 'USER-UNSELECTED'})

const searchEntered = (value) => ({ type: 'SEARCH-ENTERED', value })

const createChat = buddy => (dispatch, getState) => {
  const { selectedUser } = getState()
  fetch('/users/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ buddy, selectedUser })
  })
  .then(() => {
    console.log('made it back to create chat action') // eslint-disable-line
    var socket = io.connect()
    socket.emit('new window')
  })
}

module.exports = {
  userUnselected,
  searchEntered,
  createChat
}
