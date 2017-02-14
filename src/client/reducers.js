exports.users = (state = null, action) => {
  switch(action.type) {
    case 'USER-SELECTED': {
      return action.users
    }
    case 'USER-UNSELECTED': {
      return action.users
    }
    case 'USERS-LOADED': {
      return action.users
    }
    default: {
      return state
    }
  }
}

exports.currentView = (state = null, action) => {
  switch(action.type) {
    case 'VIEW-CHANGED': {
      return action.view
    }
    default: {
      return state
    }
  }
}

exports.selectedUser = (state = null, action) => {
  switch(action.type) {
    case 'SELECTED-USER': {
      return action.user
    }
    case 'UNSELECTED-USER': {
      return null
    }
    default: {
      return state
    }
  }
}
