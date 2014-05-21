define([
    'underscore',
    'backbone'
], function ( _, Backbone, MainRouter){
        var UserModel = Backbone.Model.extend({
            urlRoot : 'http://localhost:7000/api/users',
            idAttribute : 'id'
        });
    return UserModel;
});
