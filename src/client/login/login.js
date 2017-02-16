const React = require('react')
const { connect } = require('react-redux')
const { selectUser, changeUser, accountView, getBuddies } = require('./actions')

const Login = ({ users, handleSubmit, handleChange }) => (
  <div>
    <img id="logo" src="./icons/login.png"/>
    <div>
      <form onSubmit={ handleSubmit }>
        <select onChange={ handleChange } name="selectedUser" autoFocus required defaultValue=" ">
        <option value=" " disabled>{' Select ScreenName '}</option>
          {
            users.map((user, i) => {
              return (
                <option id={ user.id } key={ i } value={ user.screenName }>
                  { user.screenName }
                </option>
              )})}
        </select>
        <input type="submit"/>
      </form>
    </div>
    <div id="version">{' Version 1.9.9.9 '}</div>
  </div>
)

const mapState = ({ users }) => ({ users })

const mapDispatch = dispatch => ({
  handleChange: event => {
    dispatch(changeUser(event.target.value))
  },
  handleSubmit: event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const { selectedUser: user } = {
      selectedUser: formData.get('selectedUser')
    }
    dispatch(selectUser(user))
    dispatch(getBuddies())
    dispatch(accountView())
  }
})

module.exports = connect(mapState, mapDispatch)(Login)
