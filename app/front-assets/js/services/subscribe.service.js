define(['angular'], function(angular) {
    'use strict';

    subscribeSvc.$inject = ['$http'];

    function subscribeSvc($http) {

        var usersAPI = 'back-assets/user.php';

        var subscribe = function subscribe(user) {
            return $http.post(usersAPI+'?action=subscribe', user);
        };

        var sendMessage = function sendMessage(user){
            return $http.post(usersAPI+'aciton=sendMessage', user);
        };

        var service = {
            subscribe : subscribe
        };

        return service;
    }

    return subscribeSvc;

});
