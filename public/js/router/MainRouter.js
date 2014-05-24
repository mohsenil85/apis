define(function(require){

  "use strict";

  var $                 = require('jquery'),
  _                 = require('underscore'),
  Backbone          = require('backbone'),
  UsersCollection   = require('collections/usersCollection'),
  UserListView      = require('views/userListView'),
  EditUserView      = require( 'views/editUserView'),
  HomePageView      = require('views/homePageView'),
  HeaderView        = require('views/headerView'),
  FooterView        = require('views/footerView'),
  SignInView        = require('views/signInView'),
  ViewUserView      = require('views/viewUserView')

  var MainRouter = Backbone.Router.extend({
    routes: {
      '' : 'home',
      'userlist' : 'userList',
      'new' : 'editUser',
      'edit/:id' : 'editUser',
      'auth' : 'authUser',
      'view/:id' : 'viewUser'
    }
  });
  var initialize = function(){

    this.headerView = new HeaderView();
    $('.header').html(this.headerView.render());

    this.footerView = new FooterView();
    $('.footer').html(this.footerView.render());

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

    var signInView = new SignInView();

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
