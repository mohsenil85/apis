define(function(require){

  "use strict";

  var $     = require('jquery'),
  _         = require('underscore'),
  Backbone  = require( 'backbone'),
  footer    = require('text!../templates/footer.html')

  var FooterView = Backbone.View.extend({
    el: '.footer',


    render: function (){
      var template = _.template($(footer).html())
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

  return FooterView ;
});
