const React = require('react')
const { connect } = require('react-redux')

const Login = ({ users: screenNames, addUser, selectUser }) => (
  <div>
    <img id="logo" src="./icons/login.png"/>
    <div id="select-label">
      <label>Select User</label>
    </div>
    <div>
      <select autoFocus>
        {
          screenNames.map((screenName, i)=> (
            <option key={ i } onSelect={ selectUser } value={ screenName }>{ screenName }</option>
          ))
        }
      </select>
    </div>
      <form onSubmit={ addUser }>
        <div id="login">
          <div>
            <label>Add User</label>
          </div>
          <div>
            <input type="text"/>
          </div>
        </div>
        <input id="submit" type="submit" value="submit"/>
      </form>
    <div id="version">{' Version 1.9.9.9 '}</div>
  </div>
)

const mapState = ({ users }) => ({ users })

const mapDispatch = dispatch => {
  return {
    addUser: value => dispatch({ type: 'ADD-USER', view: 'login', value }),
    selectUser: value => dispatch({ type: 'SELECT-USER', view: 'account', value })
  }
}

module.exports = connect(mapState, mapDispatch)(Login)
