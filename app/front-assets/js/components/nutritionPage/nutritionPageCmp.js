define(['angular',
    '_',
    '../../services/base.service',
    'uiDialog'],
     function(angular, _, baseService) {

    NutritionPageCtrl.$inject = ['baseService'];

    function NutritionPageCtrl(baseService) {
        var vm = this;
        vm.baseService = baseService;
        vm.dialogData = {};
        vm.selectedDish = {};
        vm.isDialogOpened = false;
        vm.dishes = {};
        vm.types = {};
        vm.components = {
            list:[
                'קלריות',
                'שומן',
                'סיבים',
                'כולסטרול',
                'פחמימות',
                'חלבון',
                'ברזל',
                'קלציום',
                'ויטמין A',
                'ויטמין B'
            ],
            bottom:{
                toggle: function(){
                    this.isShown = !this.isShown;
                },
                isShown: true
            }
        };
        vm.ingredients = null;

        vm.dialog = {
            data:{},
            isOpened : false
        };

        vm.calculator = {
            isInit: false,
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
            this.baseService.getJson(['ingredients','dishes']).then(this._proccessData.bind(this));
        },
        _proccessData: function _proccessData(data){
            if(!data)
                console.log('Error, no data recieved');

            this.ingredients = data[0].data;
            this.dishes = data[1].data;
            this.calculator.result =_.mapObject(this.ingredients.grilled_chicken.data, this.resetResult.bind(this));
        },
        setIngredientsByTypes: function setIngredientsByTypes(data){
            var types = {};
            var self = this;
            _.each(data, function(ingred){
                if(!types[ingred.type.title])
                    types[ingred.type.title] = [];
                types[ingred.type.title].push(ingred);

                if(ingred.isSelected){
                    ingred.isSelected = false;
                    self.toggle(null,ingred);
                }


            });
            return types;
        },
        getIngredsByDish: function getIngredsByDish(dishName, dish){

            if(this.selectedDish.title == dish.title) return true;

            this.selectedDish.isSelected = false;
            dish.isSelected = true;
            this.selectedDish = dish;
            this.resetCalc();

            var ingredsToShow = [];

            _.each(this.ingredients, function(ingred){
                if(_.indexOf(ingred.shownIn, dishName) != -1  && _.indexOf(dish.types, ingred.type.name) != -1){
                    ingredsToShow.push(ingred);
                }
            });
            this.types = this.setIngredientsByTypes(ingredsToShow);
            this.calculator.isInit = true;
        },
        get calcResult(){
            return this.calculator.result;
        },
        set calcResult(val){
            this.calculator.result = val;
        },
        resetCalc: function resetCalc(){
            var reset = {
                calcium: 0,
                calories: 0,
                carbohydrates: 0,
                cholesterol: 0,
                fat: 0,
                fiber:0,
                iron:0,
                protein:0,
                vitamin_A:0,
                vitamin_C:0
            };
            this.calcResult = reset;
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
            if($event) $event.preventDefault();
            this.calcResult = this._calculateChange(data);
            data.isSelected = !data.isSelected;
        },
        openDialog: function openDialog(){
            this.dialog.isOpened = true;
        },
        closeDialog: function closeDialog(){
            this.dialog.isOpened = false;
            this.dialog.data = {};
        },
        showCurrentIngrids: function showCurrentIngrids($event, scope){
            $event.stopImmediatePropagation();
            this.dialog.data = scope.val;
            this.openDialog();

        }
    };

    return {
        templateUrl: 'front-assets/js/components/nutritionPage/nutritionPageCmp.view.html',
        controller: NutritionPageCtrl
    };

});
