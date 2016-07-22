define(['angular', 'ngRoute', 'hpCmp'], function() {

     var app = angular.module('schnizelApp', ['ngRoute', 'schnizelApp.components']);

      app.config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template: '<home-page>'
            });
            // .when('/contact', {
            //     template: '<contact-page>'
            // });
    }
     return app;
});
