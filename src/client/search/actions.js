const buddyAdded = buddies => ({ type: 'BUDDY-ADDED', buddies})

const addBuddy = buddy => (dispatch, getState) => {
  const { selectedUser } = getState()
  fetch('/users/addBuddy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ buddy, selectedUser })
  })
  .then(res => res.json())
  .then(buddies => dispatch(buddyAdded(buddies)))
}

module.exports = {
  addBuddy
}
