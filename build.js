({
    appDir: "public",
    baseUrl: "js",
    dir: "out",
    optimize: 'uglify',
    modules: [
        {
        name: "main"
    }
    ],
    paths: {
        bootstrap: 'vendor/bootstrap.min',

        jquery: 'vendor/jquery-1.11.0.min',
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone',

        text: 'vendor/text',

        templates: '../templates'

    }
})
