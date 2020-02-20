import React, { useState, useEffect } from 'react'
import InfoBar from '../infoBar/InfoBar'
import Messages from '../messages/Messages'
import Input from '../input/Input'
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
      // setName('');
      // setRoom('');
    })

    return () => {
      socket.emit('disconnect');
      socket.off();
    }

  }, [endPoint, location.search])

  useEffect(() => {

    socket.on('message', (message) => {
      // console.log(message)
      setMessages([...messages, message])
    })

  }, [messages]);

  const sendMessage = (event) => {
    // console.log(event)
    event.preventDefault(); 

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  console.log(messages)

  return (
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar _room={room} />
        <Messages _messages={messages} _name={name} />
        <Input 
          _message={message} 
          _setMessage={setMessage}  
          _sendMessage={sendMessage}
        />
      </div>
    </div>
  )
}

export default Chat
