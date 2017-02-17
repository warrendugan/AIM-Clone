const { createStore, combineReducers, applyMiddleware } = require('redux')
const { users, currentView, selectedUser, searchValue, buddies } = require('./reducers')
const { default: thunk } = require('redux-thunk')

const reducer = combineReducers({ users, currentView, selectedUser, searchValue, buddies })

const initialState = {
  users: [
    {
      id: null,
      screenName: null,
      selected: null
    }],
  currentView: null,
  selectedUser: null,
  searchValue: null,
  buddies: null
}

const store = createStore(reducer, initialState, applyMiddleware(thunk))

module.exports = store
