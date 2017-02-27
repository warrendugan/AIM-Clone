
const React = require('react')
const { connect } = require('react-redux')
const { sendMessage } = require('./actions')
const { viewChanged } = require('../login/actions')

const Chat = ({ messages, room, handleBackClick, handleKeyUp, handleSubmit }) => (
  <div>
    <button onClick={ handleBackClick }>{' Back '}</button>
    <div id="room">{ 'Chatroom Name:' + room }</div>
    <div id="chat">
      <div id="messages">{
        messages.map((message, i) => (<div className="message" key={ i }>{ message } </div>))
      }</div>
      <form onSubmit={ handleSubmit } >
        <div id="input-area">
          <textArea onKeyUp={ handleKeyUp } name="message" id="type" type="text" autoFocus></textArea>
          <input type="submit"/>
        </div>
      </form>
    </div>
  </div>
)

const mapState = ({ messages, room }) => ({ messages, room })

const mapDispatch = dispatch => ({
  handleBackClick: () => {
    dispatch(viewChanged('ACCOUNT'))
  },
  handleKeyUp: event => {
    if(event.key === 'Enter') {
      const message = event.target.value.replace(/(\r\n|\n|\r)/gm,"")
      dispatch(sendMessage(message))
      event.target.value = ''
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
