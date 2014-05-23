define(function(require){

  "use strict";

    var $             = require('jquery'),
    _                 = require('underscore'),
    Backbone          = require('backbone'),
    userListTemplate  = require( 'text!../templates/userListTemplate.html'),
    UsersCollection   = require('collections/usersCollection')

    var UserListView = Backbone.View.extend({
        el: '.page',
        render: function (){
            var that = this;
            var users = new UsersCollection();
            users.fetch({
                success: function(users){
                    var template = _.template($(userListTemplate).html(), 
                                              {users: users.models});
                                              that.$el.html(template);
                }
            })
        }
    });

    return UserListView ;
});
