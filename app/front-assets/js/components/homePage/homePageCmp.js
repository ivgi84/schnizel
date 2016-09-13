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
            img: 'slide_1',
            title:'שעות של הכנות ... שניות של הגשה',
            subTitle:'  בואו ראו איך מכינים הכל טרי! '

        }, {
            img: 'slide_1',
            title:'הנתחים שלנו...',
            subTitle:'הציצו למטבח שלנו בפעולה'
        }, {
            img: 'slide_1',
            title:'בונים את הבגט שלך...',
            subTitle:'בואו ראו מה נכנס לבגט.. תמונה של שניצל'
        }, {
            img: 'slide_1',
            title:'אהבה מהטעימה הראשונה ...',
            subTitle:'ארוחות קומבו'
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
