const React = require('react')
const { connect } = require('react-redux')
const { deselectUser, loginView, addSearchText, searchView } = require('./actions')

const Account = ({ users, handleClick, handleChange, searchValue }) => (
  <div>
    <button onClick={ handleClick }>{' Back '}</button>
    <img id="logo" src="./icons/login.png"/>
    <input onChange={ handleChange } id="search" type="text" value={ searchValue ? searchValue : '' }/>
    <div id="buddie-list"> {
      users
        .filter(user => (user.selected ? null : user))
        .map((user, i) => (
          <div key={ i }> { user.screenName } </div>))}
    </div>
  </div>
)

const mapState = ({ users, searchValue }) => ({ users, searchValue })

const mapDispatch = dispatch => ({
  handleChange: event => {
    const searchText = event.target.value.trim()
    if(searchText) {
      dispatch(addSearchText(searchText))
      dispatch(searchView)
    }
  },
  handleClick: () => {
    dispatch(deselectUser())
    dispatch(loginView)
  }
})

module.exports = connect(mapState, mapDispatch)(Account)
