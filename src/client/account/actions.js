const userUnselected = users => ({ type: 'USER-UNSELECTED', users})
const unselectUser = { type: 'UNSELECTED-USER' }

const deselectUser = () => (dispatch) => {
  fetch('/users/undo', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(users => dispatch(userUnselected(users)))
  .then(() => dispatch(unselectUser))
}

const loginView = ({ type: 'VIEW-CHANGED', view: 'LOGIN' })

const searchView = ({ type: 'VIEW-CHANGED', view: 'SEARCH' })

const addSearchText = (value) => ({ type: 'SEARCH-NOT-BLANK', value })

module.exports = {
  userUnselected,
  deselectUser,
  loginView,
  searchView,
  addSearchText
}
