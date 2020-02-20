import React from 'react'
import './input.css'

function Input({_message, _setMessage, _sendMessage}) {
  // console.log(_message)
  return (
    <form className='form'>
      <input
        className='input'
        placeholder='Type a message...'
        type="text"
        value={_message}
        onChange={({ target: { value } }) => _setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? _sendMessage(event) : null}
      />
      <button className="sendButton" onClick={e => _sendMessage(e)}>Send</button>
    </form>
  )
}

export default Input
