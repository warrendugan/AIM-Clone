const { createStore, combineReducers, applyMiddleware } = require('redux')
const {
  users,
  currentView,
  selectedUser,
  searchValue,
  buddies,
  messages,
  room,
  socket
} = require('./reducers')
const { default: thunk } = require('redux-thunk')

const reducer = combineReducers({
  users,
  currentView,
  selectedUser,
  searchValue,
  buddies,
  messages,
  room,
  socket
})

const initialState = {
  users: [
    {
      id: null,
      screenName: null
    }],
  currentView: null,
  selectedUser: null,
  searchValue: null,
  buddies: [],
  messages: [],
  room: '',
  socket: {}
}

const store = createStore(reducer, initialState, applyMiddleware(thunk))

module.exports = store
