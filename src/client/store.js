const { createStore, combineReducers, applyMiddleware, compose } = require('redux')
const {
  users,
  currentView,
  selectedUser,
  searchValue,
  buddies,
  messages,
  room
} = require('./reducers')
const { default: thunk } = require('redux-thunk')

const reducer = combineReducers({
  users,
  currentView,
  selectedUser,
  searchValue,
  buddies,
  messages,
  room
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
  room: ''
}

// const store = createStore(reducer, initialState, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(
   applyMiddleware(thunk)
 ));

module.exports = store
