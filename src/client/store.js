const { createStore, combineReducers } = require('redux')
const { count, clicks } = require('./reducers')

const reducer = combineReducers({ count, clicks })

const store = createStore(reducer)

module.exports = store
