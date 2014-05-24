//bootstrap for app
require.config({
    /*
    shim: {
        'backbone' : {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    },
    */
    paths: {
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',

        jquery: '../bower_components/jquery/dist/jquery.min',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',

        cookie: '../bower_components/jquery-cookie/jquery.cookie',

        serializeObject: '../bower_components/jquery-serialize-object/jquery.serialize-object.min',
        text: '../bower_components/requirejs-text/text',
        json2: '../bower_components/json2/json2',

        templates: '../templates'


    }
});

require([
    'app'
], function(App){
    App.initialize();
});
