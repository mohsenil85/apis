define(function(require){

  "use strict";

  var $             = require('jquery'),
  _                 = require('underscore'),
  Backbone          = require( 'backbone'),
  AuthModel         = require('models/authModel'),
  ChatTemplate      = require('text!../templates/chatTemplate.html'),
  cookie            = require('cookie'),
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
      var template = _.template($(ChatTemplate).html());
      this.$el.html(template);
    },

    sendChat: function(ev){
      console.log('chatting....');
      
    }

  });
  return ChatView ;
});
