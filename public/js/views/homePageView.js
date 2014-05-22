define([
  'jquery',
  'underscore',
  'backbone',
  'text!../templates/homePageTemplate.html'

], function ($, _, Backbone, homePage){
  var HomePageView = Backbone.View.extend({
    el: '.page',
    render: function (){
      var template = _.template($(homePage).html())
      this.$el.html(template);
    }
  });

  return HomePageView ;
});
