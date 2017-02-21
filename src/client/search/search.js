const React = require('react')
const { connect } = require('react-redux')
const { searchEntered } = require('../account/actions')
const { addBuddy } = require('./actions')
const { viewChanged } = require('../login/actions')


const Search = ({ users, searchValue, buddyIds, selectedUser, handleClick, handleChange }) => (
  <div>
    <button value="goBack" onClick={ handleClick }>{' Back '}</button>
    <img id="small-logo" src="./icons/login.png"/>
    <input onChange={ handleChange } id="search" type="text" value={ searchValue } autoFocus/>
    <div id="results"> {
      users
        .filter(user => ((user.screenName === selectedUser) ? null : user))
        .filter(user => ((user.screenName.indexOf(searchValue) > -1) ? user : null))
        .map((user, i) => (
          <div id="result" key={ i }>
            <div id="buddy"> { user.screenName } </div>
            <i onClick={ handleClick } key={ 10 } id={ user.screenName } className="add-buddy material-icons"> {
              buddyIds.includes(user.id)
                ? "ic_check"
                : "add_box"
            }</i>
          </div>
        ))}
    </div>
  </div>
)

const mapState = ({ users, searchValue, buddies, selectedUser }) => {
  const buddyIds = buddies.reduce((idsOnly, buddy) => {
    return idsOnly.concat(buddy.id)
  }, [])
   return {
     users,
     searchValue,
     buddyIds,
     selectedUser
   }
 }

const mapDispatch = dispatch => ({
  handleChange: event => {
    const searchText = event.target.value.trim()
    if(searchText) {
      dispatch(searchEntered(searchText))
    } else {
      dispatch(searchEntered(searchText))
      dispatch(viewChanged('ACCOUNT'))
    }
  },
  handleClick: event => {
    if(event.target.value === "goBack") {
      dispatch(searchEntered(''))
      dispatch(viewChanged('ACCOUNT'))
    } else {
      const buddy = event.target.id
      dispatch(addBuddy(buddy))
    }
  }
})

module.exports = connect(mapState, mapDispatch)(Search)
