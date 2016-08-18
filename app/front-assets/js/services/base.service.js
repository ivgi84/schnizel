define(['angular'], function(angular) {
    'use strict';

    CommonService.$inject = ['$http', '$q'];

    function CommonService($http, $q) {

        var dataMap = {
            menu: 'back-assets/data/menu.json',
            faq: 'back-assets/data/faq.json',
            ingredients: 'back-assets/data/ingredients.json',
            dishes: 'back-assets/data/dishes.json'
        };

        var getJson = function getJson(data) {
            if (data instanceof Array) {

                var promises = data.map(function(data) {
                    return $http.get(dataMap[data])
                });
                return $q.all(promises);

            } else {
                if (dataMap[data]) {
                    return $http.get(dataMap[data]).then(resolve, reject);
                } else {
                    reject();
                }

                function resolve(response) {
                    return response.data;
                }

                function reject() {
                    console.log('error getting data');
                }
            }
        };

        return {
            getJson: getJson
        };
    }
    return CommonService;
});
