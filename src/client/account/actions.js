const userUnselected = users => ({ type: 'USER-UNSELECTED', users})
const unselectUser = () => ({ type: 'UNSELECTED-USER' })

const deselectUser = () => (dispatch) => {
  fetch('/users/undo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(users => dispatch(userUnselected(users)))
  .then(() => dispatch(unselectUser()))
}

const loginView = () => ({ type: 'VIEW-CHANGED', view: 'LOGIN' })

module.exports = {
  userUnselected,
  deselectUser,
  loginView
}
