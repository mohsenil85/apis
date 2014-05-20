define([
    'jquery',
    'underscore',
    'backbone',
    'models/userModel',
    'text!../templates/editUserTemplate.html'
], function ($, _, Backbone,  UserModel,  editUserTemplate ){
    var EditUserView = Backbone.View.extend({
        el: '.page',

        render : function(options){
            var that = this; 
            if(options._id){
                that.user = new UserModel({_id: options._id });
                that.user.fetch({
                    success: function(user){
                        var template = _.template($(editUserTemplate).html(), {user: user});
                        that.$el.html(template);
                    }
                })
            } else {
                var template = _.template($(editUserTemplate).html(), {user: null});
                this.$el.html(template);
            }
        },

        events:{
            'submit .edit-user-form' : 'saveUser',
            'click .delete-user' : 'deleteUser'
        },

        saveUser: function(ev){
            var userDetails = $(ev.currentTarget).serializeObject();
            var user = new UserModel(); 
            user.save(userDetails, {
                success: function(user){
                   var MainRouter = null; 
                    console.log(MainRouter);
                    if(!MainRouter){
                        console.log('this');
                        var MainRouter = require("router/MainRouter");
                        console.log(MainRouter);
                        var router = new MainRouter();
                        router.navigate('', {trigger: true});
                    }
                }
            })
            return false;
        },

        deleteUser : function(ev){
            this.user.destroy({
                success: function(){
                    if(!MainRouter){
                        MainRouter = require("router/MainRouter");
                        router = new MainRouter();
                        MainRouter.navigate('', {trigger: true});
                    }
                }
            });
            return false;
        }

    });
    return EditUserView ;
});
