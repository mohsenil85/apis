define(function(require){

  "use strict";

    var $             = require('jquery'),
    _                 = require('underscore'),
    Backbone          = require( 'backbone'),
    UserModel         = require('models/userModel'),
    editUserTemplate  = require('text!../templates/editUserTemplate.html'),
    serializeObject   = require ('serializeObject' )

    var EditUserView = Backbone.View.extend({
         initialize : function(options){
            this.options = options || {};
        },
        el: '.page',

        render : function(options){
            var that = this; 
            if(options.id){
                console.log(options);
                that.user = new UserModel({id: options.id });
                that.user.fetch({
                    success: function(user){
                        var template = _.template($(editUserTemplate).html(), 
                                                  {user: user});
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
            console.log('this');
            
            var that = this;
            var userDetails = $(ev.currentTarget).serializeObject();
            var user = new UserModel(); 
            user.save(userDetails, {
                success: function(){
                    that.options.router.navigate('', {trigger: true});
                }
            });
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
