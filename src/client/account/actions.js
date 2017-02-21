const userUnselected = ({ type: 'USER-UNSELECTED'})

const searchEntered = (value) => ({ type: 'SEARCH-ENTERED', value })

module.exports = {
  userUnselected,
  searchEntered
}
