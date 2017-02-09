const { createStore, combineReducers } = require('redux')
const { users, currentView } = require('./reducers')

const reducer = combineReducers({ users, currentView })

const store = createStore(reducer)

module.exports = store
