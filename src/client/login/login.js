const React = require('react')
const { connect } = require('react-redux')

const Login = ({ users, handleSubmit }) => (
  <div>
    <img id="logo" src="./icons/login.png"/>
    <div>
      <form onChange={ handleSubmit }>
        <select autoFocus required defaultValue=" ">
        <option value=" " disabled>{' Select ScreenName '}</option>
          {
            users.map((screenName, i)=> (
              <option key={ i } value={ screenName }>
                { screenName }
              </option>
            ))
          }
        </select>
      </form>
    </div>
    <div id="version">{' Version 1.9.9.9 '}</div>
  </div>
)

const mapState = ({ users }) => ({ users })

const mapDispatch = dispatch => ({
  handleSubmit: () => {
    event.preventDefault()
    dispatch({ type: 'VIEW-CHANGED', view: 'ACCOUNT'})
  }
})

module.exports = connect(mapState, mapDispatch)(Login)
