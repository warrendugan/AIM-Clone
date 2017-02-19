/* global io */
const React = require('react')
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const store = require('./store')
const { App } = require('./app')
const { loadUsers } = require('./actions')

var socket = io.connect()
socket.emit('new window', { currentUser: "daBessed", buddy: "sk8erz" })

render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)

store.dispatch(loadUsers())
