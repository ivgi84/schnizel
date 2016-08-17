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

        vm.dishes = {};
        vm.types = {};
        vm.ingredients = null;
        
        vm.calculator= {
            toggle: this.toggle.bind(vm),
            result:{}
        };

        vm.init();
    }

    NutritionPageCtrl.prototype = {
        init: function init(){
            this.getData();
        },
        isNumeric: function isNumeric(val){
            return !isNaN(parseFloat(val) && isFinite(val));
        },
        resetResult: function resetResult(val, key){
            return (this.isNumeric(val)) ? 0 : val;
        },
        getData: function getData(){
            this.baseService.getJson('ingredients').then(this._proccessData.bind(this));
        },
        _proccessData: function _proccessData(data){
            if(!data)
                console.log('Error, no data recieved');

            this.ingredients = data;
            this.calculator.result =_.mapObject(data.grilled_chicken.data, this.resetResult.bind(this));
            this.types = this.setIngredientsByTypes(data);

        },
        setIngredientsByTypes: function(data){
            var types = {};
            for(var val in data){
                if(!types[data[val].type])
                    types[data[val].type] = [];
                types[data[val].type].push(data[val]);
            }
            return types;
        },
        get calcResult(){
            return this.calculator.result;
        },
        set calcResult(val){
            this.calculator.result = val;
        },
        _calculateChange: function _calculateChange(data){
            var self = this;
            var res = {};
            if(!data.isSelected){
                res =_.mapObject(data.data, function(val, key){
                    return val += self.calcResult[key];
                });
            }
            else{
                res =_.mapObject(data.data, function(val, key){
                    return self.calcResult[key] -= val;
                });
            }
            return res;
        },
        toggle: function toggle($event, data){
            $event.preventDefault();
            this.calcResult = this._calculateChange(data);
            data.isSelected = !data.isSelected;
        }
    };

});
