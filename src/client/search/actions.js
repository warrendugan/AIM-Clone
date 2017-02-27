const { getBuddies } = require('../login/actions')

const addBuddy = buddy => (dispatch, getState) => {
  const { selectedUser } = getState()
  fetch('/users/addBuddy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ buddy, selectedUser })
  })
  .then(res => res.json())
  .then(() => dispatch(getBuddies(selectedUser)))
}

module.exports = {
  addBuddy
}
