const React = require('react')
const { connect } = require('react-redux')
const { deselectUser, loginView, addSearchText, searchView } = require('../account/actions')
const { accountView, addBuddy } = require('./actions')


const Search = ({ users, handleClick, handleChange, searchValue, buddies }) => (
  <div>
    <button value="goBack" onClick={ handleClick }>{' Back '}</button>
    <img id="small-logo" src="./icons/login.png"/>
    <input onChange={ handleChange } id="search" type="text" value={ searchValue } autoFocus/>
    <div id="results"> {
      users
        .filter(user => (user.selected ? null : user))
        .filter(user => ((user.screenName.indexOf(searchValue) > -1) ? user : null))
        .map((user, i) => (
          <div id="result" key={ i }>
            <div id="buddy"> { user.screenName } </div>
            <i onClick={ handleClick } id={ user.screenName } className="add-buddy material-icons">{
              buddies
                ? (buddies.indexOf(user.id) > -1)
                  ? "ic_check"
                  : "add_box"
                : "add_box"
            }</i>
          </div>
        ))}
    </div>
  </div>
)

// const mapState = ({ users, searchValue, buddies }) => ({ users, searchValue, buddies })
const mapState = ({ users, searchValue, buddies }) => {
  console.log(buddies) // eslint-disable-line
  return { users, searchValue, buddies }
}

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
  handleClick: event => {
    if(event.target.value === "goBack") {
      dispatch(addSearchText(''))
      dispatch(deselectUser())
      dispatch(loginView)
    } else {
      const buddy = event.target.id
      dispatch(addBuddy(buddy))
    }
  }
})

module.exports = connect(mapState, mapDispatch)(Search)
