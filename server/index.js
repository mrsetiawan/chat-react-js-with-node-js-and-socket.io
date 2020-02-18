const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require('./router');

io.on('connection', (socket) => {
  console.log('socket connected');

  socket.on('join', ({name,room}) => {
    console.log(`nama : ${name} dan room :${room}`)
  })

  socket.on('tes doang', (arr) => {
    let data = arr.map((item,idx) => console.log(item) )
  })

  socket.on('disconnect', (socket) => {
    console.log('user left');
  })
})

app.use(router);

server.listen(PORT, () => console.log(`server has started in ${PORT}`));