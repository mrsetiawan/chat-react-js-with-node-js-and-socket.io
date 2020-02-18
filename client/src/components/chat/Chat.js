import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './Chat.css'

let socket;

const Chat = ({ location }) => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [isLoading, setLoading] = useState(true);
  const endPoint = 'localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);
    setLoading(false);
    socket = io(endPoint)
  },[endPoint,location.search])

  return (
    <>
      {isLoading ?
        <p>isLoading... </p> :
        <div>
          from chats {name} room {room}
        </div>
      }
    </>
  )
}

export default Chat
