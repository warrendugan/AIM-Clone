/* global io */

const userUnselected = ({ type: 'USER-UNSELECTED'})
const roomSubscribed = room => ({ type: 'ROOM-SUBSCRIBED', room })
const socketCreated = socket => ({ type: 'SOCKET-CREATED', socket})
const searchEntered = (value) => ({ type: 'SEARCH-ENTERED', value })

const createChat = buddy => (dispatch, getState) => {
  const { selectedUser } = getState()
  fetch('/users/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ buddy, selectedUser })
  })
  .then(() => {
    const socket = io.connect()
    var room = [buddy, selectedUser]
    room.sort()
    room = room[0].concat(room[1])
    socket.emit('subscribe', room)
    dispatch(roomSubscribed(room))
    dispatch(socketCreated(socket))
  })
}

module.exports = {
  userUnselected,
  searchEntered,
  createChat
}
