const { createStore, combineReducers, applyMiddleware } = require('redux')
const { users, currentView } = require('./reducers')
const { default: thunk } = require('redux-thunk')

const reducer = combineReducers({ users, currentView })

const initialState = {
  users: [
    {
      id: null,
      screenName: null,
      selected: null,
      buddies: [null]
    }],
  currentView: null
}

const store = createStore(reducer, initialState, applyMiddleware(thunk))

module.exports = store
