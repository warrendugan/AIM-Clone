const { createStore, combineReducers } = require('redux')
const { users, addUser, selectUser, currentView } = require('./reducers')

const reducer = combineReducers({ users, addUser, selectUser, currentView })

// const initialState = {
//   users: ['test']
// }

const store = createStore(reducer)

module.exports = store
