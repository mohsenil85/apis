define([
    'jquery',
    'underscore',
    'backbone',
    'collections/usersCollection',
    'views/userListView',
    'views/editUserView',
    'views/homePageView'

], function ($, _, Backbone,  UsersCollection,  UserListView, EditUserView, HomePageView ){
    var MainRouter = Backbone.Router.extend({
        routes: {
            '' : 'home',
            'userlist' : 'userList',
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
        var homePageView = new HomePageView();

        router.on('route:editUser', function(id){
            editUserView.render({id: id});
        });
        router.on('route:userList', function(){
            userList.render();
        });

        router.on('route:home', function(){
          homePageView.render();
        })

        Backbone.history.start();
    };
    return {
        initialize: initialize

    };
});
