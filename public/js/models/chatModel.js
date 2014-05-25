define(function(require){
  "use strict";
  var _ = require( 'underscore'),
  Backbone = require( 'backbone'),
  io = require('io')

  var ChatModel = Backbone.Model.extend({

    messages : [],
    socket: io.connect('http://localhost/:7000'),
    message : function(){


      this.socket.on('message', function(data){
        console.log(data);
      })
    },
    send : function(){
      this.socket.emit('send',  {hello:"world "});
    }

  });
  return ChatModel;
});
