const React = require('react')
const { connect } = require('react-redux')
const Login = require('./login')
const Account = require('./account')
const Search = require('./search')
const Chat = require('./chat')

const mapState = ({ currentView }) => ({ currentView })

const View = ({ currentView }) => {
  switch(currentView) {
    case 'ACCOUNT': {
      return <Account/>
    }
    case 'LOGIN': {
      return <Login/>
    }
    case 'SEARCH': {
      return <Search/>
    }
    case 'CHAT': {
      return <Chat/>
    }
    default: {
      console.log('Landed in default') // eslint-disable-line
      return <Login/>
    }
  }
}

module.exports = connect(mapState)(View)
