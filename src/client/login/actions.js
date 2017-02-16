const userSelected = users => ({ type: 'USER-SELECTED', users })

const buddiesLoaded = buddies => ({ type: 'BUDDIES-LOADED', buddies })

const changeUser = user => ({ type: 'SELECTED-USER', user })

const accountView = () => ({ type: 'VIEW-CHANGED', view: 'ACCOUNT' })

const selectUser = () => (dispatch, getState) => {
  const { selectedUser } = getState()
  fetch('/users', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ selectedUser })
  })
  .then(res => res.json())
  .then(users => dispatch(userSelected(users)))
  .then(() => dispatch(getBuddies()))

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



module.exports = {
  selectUser,
  changeUser,
  accountView,
  getBuddies
}
