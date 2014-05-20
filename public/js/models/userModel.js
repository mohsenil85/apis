define([
    'underscore',
    'backbone'
], function ( _, Backbone){
        var UserModel = Backbone.Model.extend({
            urlRoot : '/api/users',
            idAttribute : '_id'
        });
    return UserModel;
});
