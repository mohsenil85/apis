define(function(require){

  "use strict";

    var $             = require('jquery'),
    _                 = require('underscore'),
    Backbone          = require('backbone'),
    UserModel         = require( 'models/userModel'),
    ViewUserTemplate  = require('text!../templates/viewUserTemplate.html'),
    serializeObject   = require('serializeObject' )

    var ViewUserView = Backbone.View.extend({
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
                        var template = _.template($(ViewUserTemplate).html(), 
                                                  {user: user});
                        that.$el.html(template);
                    },
                    error : function(){
                        var template = _.template($(ViewUserTemplate).html(), 
                                                  {user: null});
                        that.$el.html(template);
                    }
                })
            } else {
                console.log('hopefullly not hit');
                var template = _.template($(editUserTemplate).html(), {user: null});
                this.$el.html(template);
            }
        },

        events:{
            'click .edit-user-button' : 'editUser',
            'click .delete-user' : 'deleteUser'
        },

        editUser: function(ev){
            console.log('DEBUG');
            console.log(this.user.get('id'));
            var id = this.user.get('id');
            this.options.router.navigate('#/edit/' + id, {trigger: true});
            return false;
        }
        /*

        deleteUser : function(ev){
            var that = this;
            this.user.destroy({
                success: function(){
                    that.options.router.navigate('', {trigger: true});
                }
            });
            return false;
        }
*/

    });
    return ViewUserView ;
});
