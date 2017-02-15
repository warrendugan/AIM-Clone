const React = require('react')
const { connect } = require('react-redux')
const { deselectUser, loginView, addSearchText, searchView } = require('../account/actions')
const { accountView } = require('./actions')


const Search = ({ users, handleClick, handleChange, searchValue }) => (
  <div>
    <button onClick={ handleClick }>{' Back '}</button>
    <img id="small-logo" src="./icons/login.png"/>
    <input onChange={ handleChange } id="search" type="text" value={ searchValue } autoFocus/>
    <div id="results"> {
      users
        .filter(user => (user.selected ? null : user))
        .filter(user => ((user.screenName.indexOf(searchValue) > -1) ? user : null))
        .map((user, i) => (
          <div id="result" key={ i }> { user.screenName } </div>))}
    </div>
  </div>
)

const mapState = ({ users, searchValue }) => ({ users, searchValue})

const mapDispatch = dispatch => ({
  handleChange: event => {
    const searchText = event.target.value.trim()
    if(searchText) {
      dispatch(addSearchText(searchText))
      dispatch(searchView)
    } else {
      dispatch(addSearchText(searchText))
      dispatch(accountView)
    }
  },
  handleClick: () => {
    dispatch(addSearchText(''))
    dispatch(deselectUser())
    dispatch(loginView)
  }
})

module.exports = connect(mapState, mapDispatch)(Search)
