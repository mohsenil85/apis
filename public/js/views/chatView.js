define(function(require){

  "use strict";

  var $             = require('jquery'),
  _                 = require('underscore'),
  Backbone          = require( 'backbone'),
  ChatTemplate      = require('text!../templates/chatTemplate.html'),
  UserModel         = require('models/userModel'),
  cookie            = require('cookie'),
  io                = require('io'),
  //ChatModel         = require('models/chatModel'),
  serializeObject   = require ('serializeObject' )

  var ChatView = Backbone.View.extend({
    initialize : function(options){
      this.options = options || {};
      var socket = io.connect('http://localhost');
      socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
      });
    },
    el: '.page',

    events:{
      'click .chat-button' : 'sendChat',
      'click .recv-button' : 'recvChat'
    },

    render : function(options){
      console.log(this);
      var that = this; 
      var signedIn = this.options.auth.get('loggedIn');

      if(signedIn){
        that.user = new UserModel({id: this.options.auth.get('id') });
        that.user.fetch({
          success: function(user){
            var template = _.template($(ChatTemplate).html(),
                                      {user: user});
                                      that.$el.html(template);
          },
          error : function(){
            console.log('auth failed');
            Backbone.history.navigate('', {trigger: true});
          }
        })
      } else {

        console.log('other branch hit');
        Backbone.history.navigate('/auth/', {trigger: true});
      } 
    },

    sendChat: function(ev){
      var socket = io.connect('http://localhost');
      console.log('sendChat');
      //var chat = new ChatModel();
      //chat.send();
      //chat.message();
      socket.emit('send', { my: 'data' });
    },
    recvChat: function(ev){
      var socket = io.connect('http://localhost');
      console.log('recvChat');
      socket.on('message', function(data){
        console.log(data);
      });
    }

  });
  return ChatView ;
});
