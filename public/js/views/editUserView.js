define([
    'require',
    'jquery',
    'underscore',
    'backbone',
    'models/userModel',
    'text!../templates/editUserTemplate.html',
    'serializeObject' 
], function (require, $, _, Backbone,  UserModel,  editUserTemplate, serializeObject){
    var EditUserView = Backbone.View.extend({
         initialize : function(options){
            this.options = options || {};
        },
        el: '.page',

        render : function(options){
            var that = this; 
            if(options.id){
                that.user = new UserModel({id: options.id });
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
            
            var that = this;
            var userDetails = $(ev.currentTarget).serializeObject();
            console.log(userDetails);
            var user = new UserModel(); 
            user.save(userDetails, {
                success: function(){
                    that.options.router.navigate('', {trigger: true});
                }
            });
            console.log(user);
            return false;
        },

        deleteUser : function(ev){
            var that = this;
            this.user.destroy({
                success: function(){
                    that.options.router.navigate('', {trigger: true});
                }
            });
            return false;
        }

    });
    return EditUserView ;
});
