const React = require('react')
const { render } = require('react-dom')
const App = require('./app')
const Login = require('./login')
console.log(Login)

render(
  <Login />,
  document.getElementById('app')
)
