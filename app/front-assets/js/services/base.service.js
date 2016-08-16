define(['angular'], function(angular) {
    'use strict';

    CommonService.$inject = ['$http','$q'];

    function CommonService($http, $q) {

        var dataMap = {
            menu : 'back-assets/data/menu.json',
            faq : 'back-assets/data/faq.json',
            ingredients: 'back-assets/data/ingredients.json'
        };

        var getJson = function getJson(data) {
            if(dataMap[data]){
                return $http.get(dataMap[data]).then(resolve, reject);
            }
            else{
                reject();
            }


            function resolve(response) {
                return response.data;
            }

            function reject() {
                console.log('error getting data');
            }
        };

        return {
            getJson : getJson
        };
    }
    return CommonService;
});
