import React from 'react'
import Message from '../message/Message'
import ScrollToBottom from 'react-scroll-to-bottom'
import './messages.css'

function Messages({ _messages, _name }) {

  console.log(_messages)
  return (
    <ScrollToBottom>
      {_messages.map((message, i) =>
        <div key={i}><Message _message={message} _name={_name} /></div>
      )}
    </ScrollToBottom>
  )
}

export default Messages
