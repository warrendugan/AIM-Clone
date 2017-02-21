const React = require('react')
const { connect } = require('react-redux')
const { sendMessage } = require('./actions')
const { viewChanged } = require('../login/actions')

const Chat = ({ messages, handleBackClick, handleKeyPress, handleSubmit }) => (
  <div>
    <button onClick={ handleBackClick }>{' Back '}</button>
    <div id="chat">
      <div id="messages">{
        messages.map((message, i) => (<div key={ i }>{ message } </div>))
      }</div>
      <form onSubmit={ handleSubmit } >
        <div id="input-area">
          <textArea onKeyPress={ handleKeyPress } name="message" id="type" type="text" autoFocus></textArea>
          <input type="submit"/>
        </div>
      </form>
    </div>
  </div>
)

const mapState = ({ messages }) => ({ messages })

const mapDispatch = dispatch => ({
  handleBackClick: () => {
    dispatch(viewChanged('ACCOUNT'))
  },
  handleKeyPress: event => {
    if(event.key === 'Enter') {
      const message = event.target.value
      dispatch(sendMessage(message))

    }
  },
  handleSubmit: event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const { message } = {
      message: formData.get('message')
    }
    dispatch(sendMessage(message))
  }
})

module.exports = connect(mapState, mapDispatch)(Chat)
