import React from 'react'
import './input.css'

function Input() {
  return (
    <form className='form'>
      <input
        className='input'
        placeholder='Type a message...'
        type="text"
      />
      <button className="sendButton">Send</button>
    </form>
  )
}

export default Input
