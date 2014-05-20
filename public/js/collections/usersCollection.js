define([
    'jquery',
    'underscore',
    'backbone',
    'models/userModel'
], function($, _, Backbone, UserModel){
    var UsersCollection = Backbone.Collection.extend({
        model : UserModel,
        url : 'http://localhost:7000/api/users'
    });

    return UsersCollection;
});
