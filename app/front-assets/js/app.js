define(['angular','ngRoute', 'hpCmp', 'menuCmp', 'nutritionCmp', 'storyCmp', 'contactCmp'], function() {

     var app = angular.module('schnizelApp', ['ngRoute', 'schnizelApp.components']);

      app.config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template: '<home-page>'
            })
            .when('/menu', {
                template: '<menu-page>'
            })
            .when('/nutrition', {
                template:'<nutrition-page>'
            })
            .when('/story', {
                template: '<story-page>'
            })
            .when('/contact', {
                template: '<contact-page>'
            });
    }
     return app;
});
