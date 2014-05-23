define(function(require){

  "use strict";

  var $     = require('jquery'),
  _         = require('underscore'),
  Backbone  = require( 'backbone'),
  header    = require('text!../templates/header.html')

  var HeaderView = Backbone.View.extend({
    el: '.header',


    render: function (){
      var template = _.template($(header).html())
      this.$el.html(template);
    }//,
/*
    events:{
      'click .view-users' : 'viewUsers',
      'click .new-user' : 'newUser'
    },
    viewUsers : function(){
      this.options.router.navigate('/userlist', {trigger: true});
    },
    newUser : function(){
      this.options.router.navigate('/new', {trigger: true});
    }

*/
  });

  return HeaderView ;
});
