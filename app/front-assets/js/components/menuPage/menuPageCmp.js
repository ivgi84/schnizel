define(['angular', './components/components'], function() {

    angular
        .module('schnizelApp.components')
        .component('menuPage', {
            templateUrl: 'front-assets/js/components/menuPage/menuPageCmp.view.html',
            controller: MenuPageCtrl,
            require : ['^siteNav','^siteFooter']
        });

    function MenuPageCtrl () {
        console.log('MenuPageCtrl');
    }

});
