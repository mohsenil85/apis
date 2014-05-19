require.config({
    appName: "User Mang",
    paths: {
        bootstrap: 'vendor/bootstrap.min',

        jquery: 'vendor/jquery-1.11.0.min',
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone',

        text: 'vendor/text',

        templates: '../templates'

    }
});

require([
    'router/MainRouter'
], function(MainRouter){
    MainRouter.initialize();
});
