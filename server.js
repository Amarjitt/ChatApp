// const server = require('http').createServer();


const io = require('socket.io')(3000);

io.on('connection', client => {
  client.emit('chat-message','hello world')
//   client.on('disconnect', () => { /* … */ });
});
















// server.listen(3000);