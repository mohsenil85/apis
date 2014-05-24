define(function(require){

  "use strict";

  var $             = require('jquery'),
  _                 = require('underscore'),
  Backbone          = require( 'backbone'),
  AuthModel         = require('models/authModel'),
  SignInTemplate  = require('text!../templates/signIn.html'),
  cookie  = require('cookie'),
  serializeObject   = require ('serializeObject' )

  var SignInView = Backbone.View.extend({
    initialize : function(options){
      this.options = options || {};
    },
    el: '.page',

    events:{
      'click .auth-button' : 'authUser'
    },

    render : function(options){
      var template = _.template($(SignInTemplate).html());
      this.$el.html(template);
    },

    authUser: function(ev){
      var that = this;
      var data = {};
      var uName = $('#userName').val();
      var pword = $('#password').val();
      this.authObject = new AuthModel({
        userName: uName,
        password: pword
      });
      var ret = this.authObject.save()
      .complete(function(){
        that.handleCookies(ret.status);
      })
    },
    handleCookies: function(status){
      if (status === 401){
        console.log('err');
        return false;
      };
      if (status === 200){
        console.log($.cookie('user'));
        console.log('success');
      };
      
    }

  });
  return SignInView ;
});
