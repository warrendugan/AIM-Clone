const { createStore, combineReducers } = require('redux')
const { users, currentView } = require('./reducers')

const reducer = combineReducers({ users, currentView })

const initialState = {
  users: [
    {
      id: 1,
      screenName: 'test',
      selected: false,
      buddies: []
    }, {
      id: 2,
      screenName: 'other',
      selected: false,
      buddies: []
    }, {
      id: 3,
      screenName: 'sKa4LyfE',
      selected: false,
      buddies: []
    }, {
      id: 4,
      screenName: 'hoMie4u',
      selected: false,
      buddies: []
    }, {
      id: 5,
      screenName: 'sk8erz',
      selected: false,
      buddies: []
    }
  ],
  currentView: 'LOGIN'
}

const store = createStore(reducer, initialState)

module.exports = store
