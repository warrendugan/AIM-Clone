exports.users = (state = null, action) => {
  switch(action.type) {
    case 'USER-SELECTED': {
      var userIndex
      var updatedUser = state.filter((user, i) => {
        if(user.screenName.indexOf(action.user) > -1) {
          userIndex = i
          return user
        }
      })
      updatedUser[0] = Object.assign({}, updatedUser[0], {
        selected: true
      })
      return [
        ...state.slice(0, userIndex),
        updatedUser[0],
        ...state.slice(userIndex + 1)
      ]
    }
    case 'USER-UNSELECTED': {
      updatedUser = state.filter((user, i) => {
        if(user.selected === true) {
          userIndex = i
          return user
        }
      })
      updatedUser[0] = Object.assign({}, updatedUser[0], {
        selected: false
      })
      return [
        ...state.slice(0, userIndex),
        updatedUser[0],
        ...state.slice(userIndex + 1)
      ]
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
