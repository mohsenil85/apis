var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var io = require('socket.io');

var app = express();
var api = require('./app/api');

var port = 7000;

app.use(bodyParser());
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));
 
app.use('/api', api);
//app.listen(port);

var io = io.listen(app.listen(port));

io.sockets.on('connection', function(socket){
  socket.emit('message', {message: 'welcome to chat'});
  socket.on('send', function(data){
    socket.emit('thing', {message: 'thing was recvd'});
    console.log(data);
    //io.sockets.emit('message', data)
  });
});

