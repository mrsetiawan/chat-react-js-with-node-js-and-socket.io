import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'

let socket;

const Chat = ({ location }) => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const endPoint = 'localhost:5000';

  useEffect(() => {

    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);
    socket = io(endPoint)

    socket.emit('join', { name, room }, () => {

    })

    socket.emit('tes doang', ['tes 1', 'tes 2', ' tes 3'])

    return () => {
      socket.emit('disconnect');
      socket.off();
    }

  }, [endPoint, location.search])

  useEffect(() => {

    socket.on('message', (message) => {
      setMessages([...messages, message])
    })

  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault(); 

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  console.log(`ini message ${message} dan ini messages ${messages}`)
  return (
    <div className='outerContainer'>
      <div className='container'>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null }
        />
      </div>
    </div>
  )
}

export default Chat
