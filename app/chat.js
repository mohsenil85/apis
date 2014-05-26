var io = require('socket.io');

io.sockets.on('connection', function(socket){
  socket.emit('message', {message: 'welcome to chat'});
  socket.on('send', function(data){
    socket.emit('thing', {message: 'thing was recvd'});
    console.log(data);
    //io.sockets.emit('message', data)
  });
});

