const { createStore, combineReducers, applyMiddleware } = require('redux')
const { users, currentView, selectedUser, searchValue } = require('./reducers')
const { default: thunk } = require('redux-thunk')

const reducer = combineReducers({ users, currentView, selectedUser, searchValue })

const initialState = {
  users: [
    {
      id: null,
      screenName: null,
      selected: null,
      buddies: [null]
    }],
  currentView: null,
  selectedUser: null,
  searchValue: null,
}

const store = createStore(reducer, initialState, applyMiddleware(thunk))

module.exports = store
