define(['angular',
    '_',
    './components/components',
    './services/base.service',
], function(angular, _,components, baseService) {

    angular
        .module('schnizelApp.components')
        .component('nutritionPage', {
            templateUrl: 'front-assets/js/components/nutritionPage/nutritionPageCmp.view.html',
            controller: NutritionPageCtrl,
            require: ['^siteNav', '^siteFooter']
        });

    NutritionPageCtrl.$inject = ['baseService'];

    function NutritionPageCtrl(baseService) {
        var vm = this;
        vm.baseService = baseService;

        vm.init();

    }

    NutritionPageCtrl.prototype = {
        init: function init(){
            this.getData();
        },
        getData: function getData(){
            this.baseService.getJson('ingredient').then(this._proccessData);
        },
        _proccessData: function _proccessData(data){
            if(!data)
                console.log('Error, no data recieved');

            
            debugger;
        }
    };

});
