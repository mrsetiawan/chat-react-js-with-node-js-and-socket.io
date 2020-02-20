import React from 'react'
import './message.css'

function Message({ _message: { user, text }, _name }) {

  let currentUser = false;

  const trimNamed = _name.trim().toLowerCase();

  if (user === trimNamed) {
    currentUser = true;
  }

  return (
    currentUser ? (
      <div className='messageContainer justifyEnd'>
        <p className='sentText pr-10'>{trimNamed}</p>
        <div className='messageBox backgroundBlue'>
          <p className='messageText colorWhite'>{text}</p>
        </div>
      </div>
    ) : (
      <div className='messageContainer justifyStart'>
        <div className='messageBox backgroundlight'>
          <p className='messageText colorDark'>{text}</p>
        </div>
        <p className='sentText pl-10'>{user}</p>
      </div>
    )
  )
}

export default Message
