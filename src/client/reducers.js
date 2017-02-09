exports.users = (state = ['test', 'other', 'sKa4LyfE', 'hoMie4u', 'sk8erz'], action) => {
  switch(action.type) {
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
