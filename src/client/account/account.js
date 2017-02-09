const React = require('react')
const { connect } = require('react-redux')

const Account = ({ screenNames }) => (
  <div>
    <img id="logo" src="./icons/login.png"/>
    <div id="buddie-list">
      {
        screenNames.map((screenName, i) => (<div key={ i }> { screenName } </div>))
      }
    </div>
  </div>
)

const mapState = ({ users: screenNames }) => ({ screenNames })

const mapDispatch = dispatch => {
  return {
    dispatch
  }
}

module.exports = connect(mapState, mapDispatch)(Account)
