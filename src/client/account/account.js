const React = require('react')
const { connect } = require('react-redux')
const { userUnselected, searchEntered, createChat } = require('./actions')
const { viewChanged } = require('../login/actions')

const Account = ({ searchValue, buddies, handleBackClick, handleChatClick, handleChange }) => (
  <div>
    <button onClick={ handleBackClick }>{' Back '}</button>
    <img id="logo" src="./icons/login.png"/>
    <input onChange={ handleChange } id="search" type="text" autoFocus value={ searchValue ? searchValue : '' }/>
    <div id="buddie-list"> {
      buddies
        .map((buddy, i) => (
          <div onClick={ handleChatClick } id={ buddy.screenName } key={ i }> { buddy.screenName } </div>
        ))
    }
    </div>
  </div>
)

const mapState = ({ searchValue, buddies }) => ({ searchValue, buddies })

const mapDispatch = dispatch => ({
  handleChange: event => {
    const searchText = event.target.value.trim()
    if(searchText) {
      dispatch(searchEntered(searchText))
      dispatch(viewChanged('SEARCH'))
    }
  },
  handleBackClick: () => {
    dispatch(userUnselected)
    dispatch(viewChanged('LOGIN'))
  },
  handleChatClick: event => {
    const buddy = event.target.id
    dispatch(createChat(buddy))
  }
})

module.exports = connect(mapState, mapDispatch)(Account)
