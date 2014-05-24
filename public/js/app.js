define(function (require) {

  "use strict";

  var $             = require('jquery'),
      _             = require('underscore'),
      Backbone      = require('backbone'),
      MainRouter    = require('router/MainRouter')

    var initialize = function(){
      MainRouter.initialize();

    }
    return {
        initialize: initialize
    };
});
