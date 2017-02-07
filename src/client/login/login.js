const React = require('react')

module.exports = () => (
  <div>
    <img id="logo" src="./icons/login.png"/>
      <form>
        <div id="login">
          <div>
            <label>ScreenName</label>
          </div>
          <div>
            <input type="text" autofocus />
          </div>
        </div>
        <input id="submit" type="submit" />
      </form>
    <div id="version">Version 1.999</div>
  </div>
)
