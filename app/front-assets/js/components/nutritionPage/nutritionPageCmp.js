define(['angular',
    '_',
    './components/components',
    './services/base.service'
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

        vm.ingredients = null;

        vm.init();

        vm.calculation= {
            add: vm.add,
            calculatedResult:{}
        };

    }

    NutritionPageCtrl.prototype = {
        init: function init(){
            this.getData();
        },
        setInitialResult: function setInitialResult(val, key){
            return val = 0;
        },
        getData: function getData(){
            this.baseService.getJson('ingredients').then(this._proccessData.bind(this));
        },
        _proccessData: function _proccessData(data){
            if(!data)
                console.log('Error, no data recieved');

                this.ingredients = data;
                this.calculation.calculatedResult =_.mapObject(data.grilled_chicken.data, this.setInitialResult)
        },
        add: function add($event, data){
            debugger;
            $event.preventDefault();

        }
    };

});
