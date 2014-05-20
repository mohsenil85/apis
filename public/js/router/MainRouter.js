define([
    'jquery',
    'underscore',
    'backbone',
    'collections/usersCollection',
    'views/userListView',
    'views/editUserView'

], function ($, _, Backbone,  UsersCollection,  UserListView, EditUserView ){
    var MainRouter = Backbone.Router.extend({
        routes: {
            '' : 'home',
            'new' : 'editUser',
            'edit/:id' : 'editUser'
        }
    });
    var initialize = function(){

        var router = new MainRouter();

        router.on('route:editUser', function(id){
            var editUserView = new EditUserView();
            editUserView.render({_id: id});
        });
        router.on('route:home', function(){
            var userList = new UserListView();
            userList.render();
        });

        Backbone.history.start();

    };
    return {
        initialize: initialize

    };
});
