define(function(require){

  "use strict";
  
    var $       = require( 'jquery'),
        _       = require('underscore'),
        Backbone = require( 'backbone'),
        UserModel = require( 'models/userModel')

    var UsersCollection = Backbone.Collection.extend({
        model : UserModel,
        url : 'http://localhost:7000/api/users'
    });

    return UsersCollection;
});
