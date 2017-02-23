const buddiesLoaded = buddies => ({ type: 'BUDDIES-LOADED', buddies })

const userSelected = user => ({ type: 'USER-SELECTED', user })

const viewChanged = view => ({ type: 'VIEW-CHANGED', view })

const getBuddies = user => dispatch => {
  fetch('/users/' + user + '/buddies', {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(buddies => dispatch(buddiesLoaded(buddies)))
}

module.exports = {
  userSelected,
  viewChanged,
  getBuddies,
  buddiesLoaded
}
