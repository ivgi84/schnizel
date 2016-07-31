define(['angular', './directives/directives', './components/components', 'slickJs', 'slickDirective'], function() {
'use strict';
    angular
        .module('schnizelApp.components')
        .component('homePage', {
            templateUrl: 'front-assets/js/components/homePage/homePage.view.html',
            controller: HomePageCtrl,
            require: ['^siteNav', '^siteFooter']
        });

    function HomePageCtrl() {
        var vm = this;

        vm.user = {
            city:''
        };

        vm.slides = [{
            img: 'slide_1'
        }, {
            img: 'slide_1'
        }, {
            img: 'slide_1'
        }];
    }


    HomePageCtrl.prototype = {
        findNearest: function findNearest(){
            var vm = this;
            if(this.user.city.length < 3) return
                debugger;
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(position){
                    vm.user.currentLocation = position;
                    debugger;
                });
            }

        }
    }

});
