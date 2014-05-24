define(function(require){

  "use strict";

  var $                 = require('jquery'),
  _                 = require('underscore'),
  Backbone          = require('backbone'),
  UsersCollection   = require('collections/usersCollection'),
  AuthModel         = require('models/authModel'),
  UserListView      = require('views/userListView'),
  EditUserView      = require( 'views/editUserView'),
  HomePageView      = require('views/homePageView'),
  HeaderView        = require('views/headerView'),
  FooterView        = require('views/footerView'),
  SignInView        = require('views/signInView'),
  ChatView          = require('views/chatView'),
  ViewUserView      = require('views/viewUserView')

  var MainRouter = Backbone.Router.extend({
    routes: {
      '' : 'home',
      'userlist' : 'userList',
      'new' : 'editUser',
      'edit/:id' : 'editUser',
      'auth' : 'authUser',
      'chat' : 'userChat',
      'view/:id' : 'viewUser'
    }
  });
  var initialize = function(){

    this.headerView = new HeaderView();
    $('.header').html(this.headerView.render());

    this.footerView = new FooterView();
    $('.footer').html(this.footerView.render());

    var router = new MainRouter();
    var auth  = new AuthModel();
    var userList = new UserListView();

    var editUserView = new EditUserView({
      router: router
      , auth: auth
    });
    var homePageView = new HomePageView({
      router: router
      , auth: auth
    });

    var viewUserView = new ViewUserView({
      router: router
      , auth: auth
    });

    var signInView = new SignInView({
        auth: auth
    });
    var chatView = new ChatView({
        auth: auth
    });

    router.on('route:userChat', function(id){
      chatView.render({id: id});
    });

    router.on('route:authUser', function(){
      signInView.render();
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
