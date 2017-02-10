const React = require('react')
const { connect } = require('react-redux')

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { handleChange } = this
    const { value } = this.state
    const { handleSubmit } = this.props
    return (
      <div>
        <img id="logo" src="./icons/login.png"/>
        <div>
          <form>
            <select value={ value } onChange={ handleChange } autoFocus required defaultValue=" ">
            <option value=" " disabled>{' Select ScreenName '}</option>
              {
                this.state.users.map((user) => {
                  const { id, screenName } = user
                  return (
                    <option onClick={ handleSubmit } id={ id } key={ id } value={ screenName }>
                      { screenName }
                    </option>
                  )})}
            </select>
            <input type="submit"/>
          </form>
        </div>
        <div id="version">{' Version 1.9.9.9 '}</div>
      </div>
    )
  }
}

const mapState = ({ users }) => ({ users })

const mapDispatch = dispatch => ({
  handleSubmit: value => {
    console.log(value) // eslint-disable-line
    //if(event) event.preventDefault()
    dispatch( { type: 'VIEW-CHANGED', view: 'ACCOUNT' })
    dispatch({ type: 'USER-SELECTED'})
  }
})

module.exports = connect(mapState, mapDispatch)(Login)

// <form onChange={ handleSubmit }>
// </form>
