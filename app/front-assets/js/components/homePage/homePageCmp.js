define('homePageCmp',['angular'], function(angular) {
    angular
        .module('schnizelApp')
        .component('homePage', {
            templateUrl: 'assets/components/homePage/homePage.view.html',
            controller: HomePageCtrl
        });

    function HomePageCtrl() {
        console.log(111);
    }
});
