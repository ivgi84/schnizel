define(['angular', './components/components'], function() {

    angular
        .module('schnizelApp.components')
        .component('nutritionPage', {
            templateUrl: 'front-assets/js/components/nutritionPage/nutritionPageCmp.view.html',
            controller: NutritionPageCtrl,
            require : ['^siteNav','^siteFooter']
        });

    function NutritionPageCtrl () {
        console.log('NutritionPageCtrl');
    }

});
