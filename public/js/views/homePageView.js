define([
  'jquery',
  'underscore',
  'backbone',
  'text!../templates/homePageTemplate.html'

], function ($, _, Backbone, homePage){
  var HomePageView = Backbone.View.extend({
    el: '.page',

    initialize : function(options){
      this.options = options || {};
    },

    render: function (){
      var template = _.template($(homePage).html())
      this.$el.html(template);
    },

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
  });

  return HomePageView ;
});
