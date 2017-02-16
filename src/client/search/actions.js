const accountView = ({ type: 'VIEW-CHANGED', view: 'ACCOUNT' })

const buddyAdded = buddies => ({ type: 'BUDDY-ADDED', buddies})

const addBuddy = buddy => dispatch => {
  fetch('/users/addBuddy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ buddy })
  })
  .then(res => res.json())
  .then(buddies => dispatch(buddyAdded(buddies)))
}

module.exports = {
  accountView,
  addBuddy
}
