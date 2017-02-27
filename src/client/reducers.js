exports.users = (state = null, action) => {
  switch(action.type) {
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
    case 'USER-SELECTED': {
      return action.user
    }
    case 'USER-UNSELECTED': {
      return null
    }
    default: {
      return state
    }
  }
}

exports.searchValue = (state = null, action) => {
  switch(action.type) {
    case 'SEARCH-ENTERED': {
      return action.value
    }
    default: {
      return state
    }
  }
}

exports.buddies = (state = [], action) => {
  switch(action.type) {
    case 'BUDDIES-LOADED': {
      return action.buddies
    }
    case 'USER-UNSELECTED': {
      return []
    }
    default: {
      return state
    }
  }
}

exports.messages = (state = [], action) => {
  switch(action.type) {
    case 'MESSAGE-SOCKETED': {
      return state.concat(action.message)
    }
    default: {
      return state
    }
  }
}

exports.room = (state = '', action) => {
  switch(action.type) {
    case 'ROOM-SUBSCRIBED': {
      return action.room
    }
    default: {
      return state
    }
  }
}
