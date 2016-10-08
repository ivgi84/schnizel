define(['angular', 'ngRoute', './services/services', 'ngAnimate', 'hpCmp', 'menuCmp', 'nutritionCmp', 'storyCmp', 'contactCmp', 'branchesCmp'], function() {

    var app = angular.module('schnizelApp', ['ngRoute', 'ngAnimate', 'schnizelApp.components', 'schnizelApp.directives', 'schnizelApp.services']);

    app.config(config);

    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({ enabled: true, requireBase: false });
        $routeProvider
            .when('/', {
                template: '<home-page>'
            })
            .when('/menu', {
                template: '<menu-page>'
            })
            .when('/nutrition', {
                template: '<nutrition-page>'
            })
            .when('/story', {
                template: '<story-page>'
            })
            .when('/contact', {
                template: '<contact-page>'
            })
            .when('/branches', {
                template: '<branches-page>'
            });
    }
    return app;
});
