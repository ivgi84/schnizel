define(['angular'], function(angular) {
    'use strict';

    angular
        .module('schnizelApp.services')
        .service('subscribeSvc', subscribeSvc);

    subscribeSvc.$inject = ['$http'];

    function subscribeSvc($http) {

        var usersAPI = 'back-assets/user.php';

        var subscribe = function(user) {
            return $http.post(usersAPI+'?action=subscribe', user);
        };

        var service = {
            subscribe : subscribe
        };

        return service;
    }

});
