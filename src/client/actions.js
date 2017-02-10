const usersLoaded = users => ({ type: 'USER-LOADED', users})

const loadUsers = () => dispatch => {
  fetch('/users', {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(users => dispatch(usersLoaded(users)))
}

module.exports = {
  usersLoaded,
  loadUsers
}
