define([
    'jquery',
    'underscore',
    'backbone',
    'collections/usersCollection',
    'views/userListView',
    'views/editUserView',
    'views/homePageView',
    'views/viewUserView'

], function ($, _, Backbone,  UsersCollection,  UserListView, EditUserView, HomePageView, ViewUserView ){
    var MainRouter = Backbone.Router.extend({
        routes: {
            '' : 'home',
            'userlist' : 'userList',
            'new' : 'editUser',
            'edit/:id' : 'editUser',
            'view/:id' : 'viewUser'
        }
    });
    var initialize = function(){

        var router = new MainRouter();
        var userList = new UserListView();

        var editUserView = new EditUserView({
            router: router
        });
        var homePageView = new HomePageView({
            router: router
        });

        var viewUserView = new ViewUserView({
            router: router
        });

        router.on('route:editUser', function(id){
            editUserView.render({id: id});
        });
        router.on('route:userList', function(){
            userList.render();
        });

        router.on('route:home', function(){
          homePageView.render();
        })

        router.on('route:viewUser', function(id){
          viewUserView.render({id: id});
        })

        Backbone.history.start();
    };
    return {
        initialize: initialize

    };
});
