define([
    'angular',
    '../../directives/directives',
    '../../services/services',
    '../../services/affiliates.service',
    'slickDirective'
], function() {
    'use strict';

    HomePageCtrl.$inject = ['$sce', 'baseService'];

    function HomePageCtrl($sce, baseService) {
        var vm = this;
        vm.pageTitle = 'שניצל קומפני';
        vm.baseService = baseService;
        vm.$sce = $sce;
        vm.affiliates = {
            exist: false,
            list: []
        };
        vm.user = {
            city: ''
        };

        vm.slides = [{
            img: 'slide_4.jpg',
            title: 'אהבה מהטעימה הראשונה ...',
            subTitle: 'ארוחות קומבו',
            link:'https://docs.google.com/presentation/d/1nEj1QX6YWPFAjS5650Wo79PnDqP2sxtmCL7hDmdYB6M/pub?start=false&loop=false&delayms=3000&slide=id.p'
        }, {
            img: 'slide_1.jpg',
            title: 'שעות של הכנות ... שניות של הגשה',
            subTitle: '  בואו ראו איך מכינים הכל טרי! ',
            link:'/story/#videos'

        }, {
            img: 'slide_2.jpg',
            title: 'הנתחים שלנו...',
            subTitle: 'הציצו למטבח שלנו בפעולה',
            link:'/story/#videos'
        }, {
            img: 'slide_3.jpg',
            title: 'בונים את הבגט שלך...',
            subTitle: 'בואו ראו מה נכנס לבגט...',
            link:'/menu/?slide=1'
        }];
    }


    HomePageCtrl.prototype = {
        findNearest: function findNearest() {
            var self = this;
            self.baseService.getJson('affiliates').then(function(response) {

                if (response[self.user.city]) {

                    self.affiliates.exist = true;
                    self.affiliates.list = response[self.user.city];
                    for (var affiliate in self.affiliates.list) {
                        self.affiliates.list[affiliate].frameSrc = self.$sce.trustAsResourceUrl(self.affiliates.list[affiliate].frameSrc);
                    }
                } else {
                    self.affiliates.exist = false;
                    self.affiliates.list = [];
                }
            });

        }
    };

    return {
        templateUrl: 'front-assets/js/components/homePage/homePage.view.html',
        controller: HomePageCtrl
    };

});
