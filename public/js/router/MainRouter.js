define([
    'jquery',
    'underscore',
    'backbone',
    'collections/usersCollection',
    'views/userListView',
    'views/editUserView'

], function ($, _, Backbone,  UsersCollection,  UserListView, EditUserView){
    var MainRouter = Backbone.Router.extend({
        routes: {
            '' : 'home',
            'new' : 'editUser',
            'edit/:id' : 'editUser'
        }
    });
    var initialize = function(){

        $.fn.serializeObject = function() {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name] !== undefined) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };
        var router = new MainRouter();

        var userList = new UserListView();
        var editUser = new EditUserView();

        router.on('route:editUser', function(id){
            editUser.render({_id: id});
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
