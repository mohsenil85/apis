define([
  'jquery',
  'underscore',
  'backbone',
  'router/MainRouter'
], function($, _, Backbone, MainRouter){
    var initialize = function(){
       MainRouter.initialize();

    }
    return {
        initialize: initialize
    };
});
