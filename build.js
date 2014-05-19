({
    paths: {
        bootstrap: 'vendor/bootstrap.min',

        jquery: 'vendor/jquery-1.11.0.min',
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone',

        text: 'vendor/text',

        templates: '../templates'

    }
        appDir: "./public",
        baseUrl: "./public/js",
        dir: "dist",
        modules: [
                {
                    name: "main"
                }
            ]
        cssIn : ./public/css/main.css
        out: "dist/main.css"
})
