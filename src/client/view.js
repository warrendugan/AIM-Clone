const React = require('react')
const { connect } = require('react-redux')
const Login = require('./login')
const Account = require('./account')

const mapState = ({ currentView }) => ({ currentView })

const View = ({ currentView }) => {
  switch(currentView) {
    case 'account': {
      return <Account/>
    }
    case 'login': {
      return <Login/>
    }
    default: {
      return <Login/>
    }
  }
}

module.exports = connect(mapState)(View)
