const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require('./router');
const {
  addUser,
  removeUser,
  getUser,
  getUserInRoom
} = require('./user.js');

io.on('connection', (socket) => {
  socket.on('join', ({ name,room }, callback) => {

    const { error,user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.emit('message', {user: 'admin', text: `${name} ,welcome tho the room ${room}`});
    socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has join in room ${user.room}`});
    // console.log(user)
    socket.join(user.room);

    callback();

  });

  socket.on('sendMessage', (message, callback) => {
    const user  = getUser(socket.id)
    io.to(user.room).emit('message', {user: user.name, text: message})

    callback();
  });

  socket.on('disconnect', (socket) => {
    // console.log(socket);
  });
});

app.use(router);

server.listen(PORT, () => console.log(`server has started in ${PORT}`));