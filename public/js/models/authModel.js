define(function(require){
  "use strict";
  var _ = require( 'underscore'),
  Backbone = require( 'backbone')

  var AuthModel = Backbone.Model.extend({
    /*
    initalize: function(options){
      options = this.options || {};
    },
    */
    urlRoot : 'http://localhost:7000/api/auth/:userName'
  });
  return AuthModel;
});
