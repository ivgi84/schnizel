define(['angular', './directives/directives', './components/components', 'slickJs', 'slickDirective','./services/services'], function() {
'use strict';
    angular
        .module('schnizelApp.components')
        .component('homePage', {
            templateUrl: 'front-assets/js/components/homePage/homePage.view.html',
            controller: HomePageCtrl,
            require: ['^siteNav', '^siteFooter']
        });

        HomePageCtrl.$inject = ['affiliatesSvc'];

    function HomePageCtrl(affiliatesSvc) {
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
            if(this.user.city.length >= 2){

            }
        }
    }

});
