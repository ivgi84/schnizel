define(['angular'], function(angular) {
    'use strict';

    subscribeSvc.$inject = ['$http'];

    function subscribeSvc($http) {

        var usersAPI = 'back-assets/user.php';

        var subscribe = function subscribe(user) {
            return $http.post(usersAPI +'?action=subscribe', user);
        };

        var careerApply = function careerApply(user){
            return $http.post(usersAPI + '?action=newApplicant', user);
        };

        var sendMessage = function sendMessage(user){
            return $http.post(usersAPI + '?action=sendMessage', user);
        };

        var service = {
            subscribe : subscribe,
            careerApply: careerApply,
            sendMessage:sendMessage
        };

        return service;
    }

    return subscribeSvc;

});
