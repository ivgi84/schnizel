define(['angular','./services/services', './components/components','./services/subscribe.service'], function() {
'use strict';
    angular
        .module('schnizelApp.components')
        .component('siteFooter', {
            templateUrl: 'front-assets/js/components/siteFooter/siteFooterCmp.view.html',
            controller: SiteFooterCtrl
        });

        SiteFooterCtrl.$inject = ['subscribeSvc', '$timeout'];

    function SiteFooterCtrl (subscribeSvc, $timeout) {
        var vm = this;
        vm.subscribeSvc = subscribeSvc;
        vm.$timeout = $timeout;
        vm.model = {
            user: {
                email: '',
                tel:''
            }
        };

        vm.subsribe = {
            response:null
        };
    }

    SiteFooterCtrl.prototype = {
        subscribe: function subsribe(e){
            var vm = this;
            e.preventDefault();
            vm.subscribeSvc.subscribe(vm.model.user).then(function(response){
                console.log(response);
                vm.subscribe.response = response.data;
                vm.$timeout(function () {
                    vm.subscribe.response = null;
                }, 4000);
            });
        }
    };

});
