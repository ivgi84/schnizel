define([
    'angular',
    './directives/directives',
    './components/components',
    './services/services',
    './services/affiliates.service',
    'slickJs',
    'slickDirective'], function() {
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

        vm.affiliatesSvc = affiliatesSvc;

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
                console.log(this.affiliatesSvc.getAffilates());
            }
        }
    }

});
