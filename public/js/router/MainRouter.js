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
        var userList = new UserListView();

        var editUserView = new EditUserView({
            router: router
        });
        router.on('route:editUser', function(id){
            editUserView.render({id: id});
        });
        router.on('route:home', function(){
            userList.render();
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize

    };
});
