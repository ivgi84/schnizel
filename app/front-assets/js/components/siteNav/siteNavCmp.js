define(['angular', './components/components'], function() {

    angular
        .module('schnizelApp.components')
        .component('siteNav', {
            templateUrl: 'front-assets/js/components/siteNav/siteNavCmp.view.html',
            controller: SiteNavCtrl
        });

    function SiteNavCtrl() {
        var vm = this;

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

        mobileNavToggle: function mobileNavToggle(){
            this.siteNav.mobileNavOpen =!this.siteNav.mobileNavOpen;
        }
    };

});
