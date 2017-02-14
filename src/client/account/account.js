const React = require('react')
const { connect } = require('react-redux')
const { deselectUser, loginView } = require('./actions')

const Account = ({ users, handleClick }) => (
  <div>
    <button onClick={ handleClick }>{' Back '}</button>
    <img id="logo" src="./icons/login.png"/>
    <div id="buddie-list"> {
      users
        .filter(user => (user.selected ? null : user))
        .map((user, i) => (
          <div key={ i }> { user.screenName } </div>))}
    </div>
  </div>
)

const mapState = ({ users }) => ({ users })

const mapDispatch = dispatch => ({
  handleClick: () => {
    dispatch(deselectUser())
    dispatch(loginView())
  }
})

module.exports = connect(mapState, mapDispatch)(Account)
