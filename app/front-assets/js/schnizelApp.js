define(['$route','components/homePage/homePageCmp'], function($route, homePageCmp) {

     var app = angular.module('schnizelApp', ['ngRoute']);

     module.config(['$routeProvider'], config);

    function config($routeProvider) {
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
