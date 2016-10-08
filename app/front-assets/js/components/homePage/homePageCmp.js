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
            controller: HomePageCtrl
        });

        HomePageCtrl.$inject = ['$sce', 'baseService'];

    function HomePageCtrl($sce, baseService) {
        var vm = this;

        vm.baseService = baseService;
        vm.$sce = $sce;
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
            var self = this;
            self.baseService.getJson('affiliates').then(function(response){

                if(response[self.user.city]){

                self.affiliates.exist = true;
                self.affiliates.list = response[self.user.city];
                for(var affiliate in self.affiliates.list){
                    self.affiliates.list[affiliate].frameSrc = self.$sce.trustAsResourceUrl(self.affiliates.list[affiliate].frameSrc);
                }
            }
            else{
                self.affiliates.exist = false;
                self.affiliates.list = [];
            }
            });

        }
    }

});
