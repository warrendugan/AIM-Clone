const userSelected = users => ({ type: 'USER-SELECTED', users })

const selectUser = () => (dispatch, getState) => {
  const { selectedUser } = getState()
  fetch('/users', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ selectedUser })
  })
  .then(res => res.json())
  .then(users => {
    console.log(users) // eslint-disable-line
    return users
  })
  .then(users => dispatch(userSelected(users)))
}

const changeUser = user => ({ type: 'SELECTED-USER', user })

const accountView = () => ({ type: 'VIEW-CHANGED', view: 'ACCOUNT' })

module.exports = {
  selectUser,
  changeUser,
  accountView
}
