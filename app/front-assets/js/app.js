define(['./components/components'], function() {

    var app = angular.module('schnizelApp', ['ngRoute', 'ngAnimate', 'schnizelApp.components', 'schnizelApp.directives', 'schnizelApp.services']);

    app.config(config);

    app.run(['$route', '$rootScope', '$location', function($route, $rootScope, $location)  {
        $rootScope.title = $route.routes[$location.path()].title;
    }]);

    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({ enabled: true, requireBase: false });
        $routeProvider
            .when('/', {
                template: '<home-page>',
                title:'שניצל קומפני'
            })
            .when('/menu', {
                template: '<menu-page>',
                title:'שניצל קומפני - תפריט'
            })
            .when('/nutrition', {
                template: '<nutrition-page>',
                title:'שניצל קומפני - תזונה'
            })
            .when('/story', {
                template: '<story-page>',
                title:'שניצל קומפני - מה קורה'
            })
            .when('/contact', {
                template: '<contact-page>',
                title:'שניצל קומפני - צור קשר'
            })
            .when('/branches', {
                template: '<branches-page>',
                title:'שניצל קומפני - סניפים'
            })
            .when('/about', {
                template: '<about-page>',
                title:'שניצל קומפני - עלינו'
            });
    }
    return app;
});
