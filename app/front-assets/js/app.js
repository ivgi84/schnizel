define(['angular', 'ngRoute', './services/services', 'hpCmp', 'menuCmp', 'nutritionCmp', 'storyCmp', 'contactCmp', 'branchesCmp', 'aboutCmp'], function() {

    var app = angular.module('schnizelApp', ['ngRoute', 'schnizelApp.components', 'schnizelApp.directives', 'schnizelApp.services']);

    app.config(config);

    function config($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode({ enabled: true, requireBase: false });
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
            })
            .when('/about', {
                template: '<about-page>'
            });
    }
    return app;
});
