exports.users = (state = ['test'], action) => {
  switch(action.type) {
    case 'ADD-USER': {
      return state.concat(action.value)
    }
    default: {
      return state
    }
  }
}

exports.addUser = (state = [], action) => {
  switch (action.type) {
    case 'ADD-USER': {
      return state
    }
    default:
      return state
  }
}

exports.selectUser = (state = 0, action) => {
  switch (action.type) {
    case 'SELECT-USER': {
      return state
    }
    default:
      return state
  }
}

exports.currentView = (state = 'login', action) => {
  switch(action.type) {
    case 'VIEW-CHANGED': {
      return 'action.view'
    }
    default: {
      return state
    }
  }
}
