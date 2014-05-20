require.config({
    appName: "User Mang",
    paths: {
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',

        jquery: '../bower_components/jquery/dist/jquery.min',
        underscore: '../bower_components/lodash/dist/lodash.min',
        backbone: '../bower_components/backbone/backbone',

        text: '../bower_components/requirejs-text/text',

        templates: '../templates'

    }
});

require([
    'router/MainRouter'
], function(MainRouter){
    MainRouter.initialize();
});
