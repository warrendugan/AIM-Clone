exports.userBase = (state = 0, action) => {
  switch (action.type) {
    case 'ADD-USER': {
      return state
    }
    case 'TYPE-AHEAD': {
      return state
    }
    default:
      return state
  }
}

exports.clicks = (state = 0, action) => {
  switch (action.type) {
    default:
      return state
  }
}
