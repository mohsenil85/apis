define(function(require){
  "use strict";
  var _ = require( 'underscore'),
  Backbone = require( 'backbone'),
  io = require('io')

  var ChatModel = Backbone.Model.extend({
    
    initialize: function(){
    messages : [],
    socket: io.connect('http://localhost/:7000'),

      socket.on('message', function(data){
        console.log('hahahaha');
      })
    }
    
  });
  return ChatModel;
});
