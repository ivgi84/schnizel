define(['angular'], function() {

        SiteNavCtrl.$inject=['$location','$rootScope'];

    function SiteNavCtrl($location, $rootScope) {
        var vm = this;
        vm.$location = $location;
        vm.$rootScope = $rootScope;

        vm.currentUrl = $location.path();

        $rootScope.$on( "$routeChangeSuccess", function(event, next, current) {
            vm.currentUrl = $location.path();

            if(vm.siteNav.mobileNavOpen)
                vm.mobileNavToggle();

            scrollTo(document.body, 0 , 600);
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
        },
        scrollTo: function(elm, to, duration){
            debugger;
            if(duration <= 0) return;

            var diff = to - elm.scrollTop;
            var perTick = diff / duration * 10;

            setTimeout(function(){
                elm.scrollTop = elm.scrollTop + perTick;
                if(elm.scrollTop === to) return
                this.scrollTo(elm, to, duration - 10);
            },10);
        }
    };

    return {
        templateUrl: 'front-assets/js/components/siteNav/siteNavCmp.view.html',
        controller: SiteNavCtrl
    };

});
