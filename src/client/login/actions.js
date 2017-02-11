const userSelected = user => ({ type: 'USER-SELECTED', user })

const selectUser = selectedUser => {
  fetch('/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ selectedUser })
  })
  .then(res => res.json())
  .then(user => dispatch(userSelected(user)))
}

module.exports = {
  selectUser,
  userSelected
}
