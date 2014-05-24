define(function(require){

  "use strict";

  var $             = require('jquery'),
  _                 = require('underscore'),
  Backbone          = require( 'backbone'),
  //AuthModel         = require('models/authModel'),
  SignInTemplate    = require('text!../templates/signIn.html'),
  cookie            = require('cookie'),
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
      this.options.auth.set({
        userName: $('#userName').val(),
        password: $('#password').val()
      });
      var ret = this.options.auth.save()
      .complete(function(){
        that.handleCookies(ret.status);
      })
    },
    handleCookies: function(status){
      var that = this;
      if (status === 401){
        Backbone.history.navigate('', {trigger: true})
        //console.log('err');
        return false;
      };
      if (status === 200){
        //console.log(that.authObject.get('loggedIn'));
//        console.log($.cookie('user'));
        //console.log($.cookie('id'));
        //console.log('success');
        that.options.auth.set({loggedIn: true});
        that.options.auth.set({id: $.cookie('id')});
        console.log(that.options.auth.get('loggedIn'));
        console.log(that.options.auth.get('id'));
      };
      
    }

  });
  return SignInView ;
});
