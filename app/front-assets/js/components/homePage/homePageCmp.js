define(['angular', './components/components'], function(components) {

    angular
        .module('schnizelApp.components')
        .component('homePage', {
            templateUrl: 'front-assets/js/components/homePage/homePage.view.html',
            controller: HomePageCtrl
        });

    function HomePageCtrl() {
        console.log(111);
    }

});
