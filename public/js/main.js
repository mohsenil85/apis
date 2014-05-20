//bootstrap for app
require.config({
    shim: {
        'backbone' : {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    },
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
    'app'
], function(App){
    App.initialize();
});
