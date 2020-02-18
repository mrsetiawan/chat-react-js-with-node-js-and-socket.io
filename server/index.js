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
    const { error,user } = addUser({ id:socket.id,name,room });
    console.log(error)
  })

  socket.on('tes doang', (arr) => {
    let data = arr.map((item,idx) => console.log(item) )
  })

  socket.on('disconnect', (socket) => {
    console.log(socket);
  })
})

app.use(router);

server.listen(PORT, () => console.log(`server has started in ${PORT}`));