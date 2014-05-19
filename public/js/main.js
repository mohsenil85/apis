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


var Users = Backbone.Collection.extend({
  url : '/users'
});

var User = Backbone.Model.extend({
  urlRoot : '/users',
  idAttribute : '_id'
});

var UserList = Backbone.View.extend({
  el: '.page',
  render: function (){
    var that = this;
    var users = new Users();
    users.fetch({
      success: function(users){
        var template = _.template($('#user-list-template').html(), 
                                  {users: users.models});
                                  that.$el.html(template);
      }
    })
  }
});

var EditUser = Backbone.View.extend({
  el: '.page',
  render : function(options){
    var that = this; 
    if(options._id){
      var user = new User({_id: options._id });
      user.fetch({
        success: function(user){
          var template = _.template($('#edit-user-template').html(), {user: user});
          that.$el.html(template);
        }
      })
    } else {
      var template = _.template($('#edit-user-template').html(), {user: null});
      this.$el.html(template);
    }
  },
  events:{
    'submit .edit-user-form' : 'saveUser',
    'click .delete-user' : 'deleteUser'
  },
  saveUser: function(ev){
    var userDetails = $(ev.currentTarget).serializeObject();
    var user = new User(); 
    user.save(userDetails, {
      success: function(user){
        router.navigate('', {trigger: true});
      }
    })
    return false;
  },
  deleteUser : function(ev){
    ev.preventDefault();
    console.log($(ev.currentTarget));
    var userDetails = $(ev.currentTarget).serializeObject();
    console.log(userDetails);
  }

});
var Router = Backbone.Router.extend({
  routes: {
    '' : 'home',
    'new' : 'editUser',
    'edit/:id' : 'editUser'
  }
});

var userList = new UserList();
var editUser = new EditUser();

var router = new Router();
router.on('route:editUser', function(id){
  editUser.render({_id: id});
});
router.on('route:home', function(){
  userList.render();
});

Backbone.history.start();
