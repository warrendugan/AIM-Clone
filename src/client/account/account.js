const React = require('react')
const { connect } = require('react-redux')
const { userUnselected, searchEntered } = require('./actions')
const { viewChanged } = require('../login/actions')

const Account = ({ searchValue, buddies, handleClick, handleChange }) => (
  <div>
    <button onClick={ handleClick }>{' Back '}</button>
    <img id="logo" src="./icons/login.png"/>
    <input onChange={ handleChange } id="search" type="text" autoFocus value={ searchValue ? searchValue : '' }/>
    <div id="buddie-list"> {
      buddies
        .map((buddy, i) => (
          <div key={ i }> { buddy.screenName } </div>
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
  handleClick: () => {
    dispatch(userUnselected)
    dispatch(viewChanged('LOGIN'))
  }
})

module.exports = connect(mapState, mapDispatch)(Account)
