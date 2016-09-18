define(['angular', './components/components'], function() {

    angular
        .module('schnizelApp.components')
        .component('siteNav', {
            templateUrl: 'front-assets/js/components/siteNav/siteNavCmp.view.html',
            controller: SiteNavCtrl
        });

        SiteNavCtrl.$inject=['$location','$rootScope'];

    function SiteNavCtrl($location, $rootScope) {
        var vm = this;
        vm.$location = $location;
        vm.$rootScope = $rootScope;
        
        vm.currentUrl = $location.path();

        $rootScope.$on( "$routeChangeSuccess", function(event, next, current) {
            vm.currentUrl = $location.path();
        });



        vm.siteNav = {
            mobileNavOpen: false,
            navigation: [
                {
                    link:'#/menu',
                    text:'תפריט',
                    class:''
                },
                {
                    link:'#/nutrition',
                    text:'תזונה',
                    class:''
                }
            ]
        };
    }
    SiteNavCtrl.prototype = {
        setSelected: function setSelected(url){

        },
        mobileNavToggle: function mobileNavToggle(){
            this.siteNav.mobileNavOpen =!this.siteNav.mobileNavOpen;
        }
    };

});
