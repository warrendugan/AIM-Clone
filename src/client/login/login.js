const React = require('react')

const login = () => (
  <div>
    <img id="logo" src="./icons/login.png"/>
      <form onSubmit = { this.handleSubmit }>
        <div id="login">
          <div>
            <label>ScreenName</label>
          </div>
          <div>
            <select>
              <option value=" "> </option>
            </select>
          </div>
          <div>
            <input type="text" autoFocus onChange = {  }/>
          </div>
        </div>
        <input id="submit" type="submit" value="Submit"/>
      </form>
    <div id="version">Version 1.999</div>
  </div>
)

const mapState = state => {
  return {

  }
}

const mapDispatch = dispatch => {
  return {
    addUser: dispatch({ type: 'ADD-USER' }),
    typeAhead: dispatch({ type: 'TYPE-AHEAD' })
  }
}

module.exports = connect(mapState, mapDispatch)(login)
