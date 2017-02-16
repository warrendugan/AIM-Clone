const userSelected = users => ({ type: 'USER-SELECTED', users })

const selectUser = () => (dispatch, getState) => {
  const { selectedUser } = getState()
  fetch('/users', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ selectedUser })
  })
  .then(res => res.json())
  .then(users => dispatch(userSelected(users)))
}

const getBuddies = () => dispatch => {
  fetch('/users/buddies', {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(buddies => dispatch(buddiesLoaded(buddies)))
}

const buddiesLoaded = buddies => ({ type: 'BUDDIES-LOADED', buddies })

const changeUser = user => ({ type: 'SELECTED-USER', user })

const accountView = () => ({ type: 'VIEW-CHANGED', view: 'ACCOUNT' })

module.exports = {
  selectUser,
  changeUser,
  accountView,
  getBuddies
}
