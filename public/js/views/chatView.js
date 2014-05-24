define(function(require){

  "use strict";

  var $             = require('jquery'),
  _                 = require('underscore'),
  Backbone          = require( 'backbone'),
  ChatTemplate      = require('text!../templates/chatTemplate.html'),
  UserModel         = require('models/userModel'),
  cookie            = require('cookie'),
  ChatModel         = require('models/chatModel'),
  serializeObject   = require ('serializeObject' )

  var ChatView = Backbone.View.extend({
    initialize : function(options){
      this.options = options || {};
    },
    el: '.page',

    events:{
      'click .chat-button' : 'sendChat'
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
      } 
    },

    sendChat: function(ev){
      var chat = new ChatModel();
      console.log('chatting....');

    }

  });
  return ChatView ;
});
