const userSelected = users => ({ type: 'USER-SELECTED', users })

const selectUser = () => (dispatch, getState) => {
  const { selectedUser } = getState()
  fetch('/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ selectedUser })
  })
  .then(res => res.json())
  .then(users => dispatch(userSelected(users)))
}

const changeUser = user => ({ type: 'SELECTED-USER', user })

const accountView = () => ({ type: 'VIEW-CHANGED', view: 'ACCOUNT' })

module.exports = {
  selectUser,
  changeUser,
  accountView
}
