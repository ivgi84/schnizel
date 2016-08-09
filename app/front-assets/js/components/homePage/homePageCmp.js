define([
    'angular',
    './directives/directives',
    './components/components',
    './services/services',
    './services/affiliates.service',
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
        vm.affiliates = {
            exist:false,
            list:[]
        };
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
            var data = this.affiliatesSvc.getAffilates();
            if(data[this.user.city]){
                this.affiliates.exist = true;
                this.affiliates.list = data[this.user.city];
            }
            else{
                this.affiliates.exist = false;
                this.affiliates.list = [];
            }
        }
    }

});
