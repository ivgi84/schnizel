define(['angular', 'route', './components/homePage/homePageCmp'], function() {

     var app = angular.module('schnizelApp', ['ngRoute']);

     app.controller('main', function($scope){
         $scope.test = 'test';
     })

     app.config(['$routeProvider'], config);

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
//http://plnkr.co/edit/3UkSd2UXhlzOWymhLkzK?p=preview
