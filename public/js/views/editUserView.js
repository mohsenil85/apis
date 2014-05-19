define([
    'jquery',
    'underscore',
    'backbone',
    'models/userModel',
    'text!../templates/editUserTemplate.html',
    'router/MainRouter'
], function ($, _, Backbone,  UserModel,  editUserTemplate, MainRouter){
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
              window.location.href = '/';
//                    $('#home').click();
        //            router.navigate('', {trigger: true});
                }
            })
            return false;
        },

        deleteUser : function(ev){
            this.user.destroy({
                success: function(){
                    console.log('ha');
              window.location.href = '/';
                    $('#home').click();
                    //router.navigate('', {trigger: true});
                }
            });
            return false;
        }

    });
    return EditUserView ;
});
