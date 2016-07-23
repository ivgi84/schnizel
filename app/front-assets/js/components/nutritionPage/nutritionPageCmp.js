define(['angular', './components/components'], function() {

    angular
        .module('schnizelApp.components')
        .component('nutritionPage', {
            templateUrl: 'front-assets/js/components/nutritionPage/nutritionPageCmp.view.html',
            controller: NutritionPageCtrl
        });

    function NutritionPageCtrl () {
        console.log('NutritionPageCtrl');
    }

});
