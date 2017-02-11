exports.users = (state = null, action) => {
  switch(action.type) {
    case 'USER-SELECTED': {
      console.log(action.user) // eslint-disable-line
      return [
        ...state.slice(0, action.user.id),
        action.user,
        ...state.slice(action.user.id + 1)
      ]
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
