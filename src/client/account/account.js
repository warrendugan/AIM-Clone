const React = require('react')
const { connect } = require('react-redux')

const Account = ({ screenNames }) => (
  <div>
    {
      screenNames.map(screenName => (<div> { screenName } </div>))
    }
  </div>
)

const mapState = ({ screenNames }) => ({ screenNames })

const mapDispatch = dispatch => {
  return {
    dispatch
  }
}

module.exports = connect(mapState, mapDispatch)(Account)
