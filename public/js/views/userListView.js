define([
    'jquery',
    'underscore',
    'backbone',
    'text!../templates/userListTemplate.html',
    'collections/usersCollection'

], function ($, _, Backbone, userListTemplate, UsersCollection ){
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
