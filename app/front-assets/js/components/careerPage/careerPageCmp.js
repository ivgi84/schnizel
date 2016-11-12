define(['angular',
    '../../services/services',
    '../../services/base.service'], function() {

    CareerPageCtrl.$inject = ['$timeout','subscribeSvc', 'baseService'];

    function CareerPageCtrl($timeout, subscribeSvc, baseService) {

        var vm = this;
        vm.subscribeSvc = subscribeSvc;
        vm.baseService = baseService;
        vm.$timeout = $timeout;

        vm.subscribe = {
            response:null
        };

        vm.model = {
            user: {
                name: 'test',
                tel: '1231312',
                email: 'asdasd@asd.com',
                message: 'asda asd asd asd asd asd asd asd'
            }
        };

        vm.isMobile = {
            screenSize: function() {
                return window.innerWidth < 767;
            }
        };

    }

    CareerPageCtrl.prototype = {
        careerApply: function careerApply() {
            var self = this;
            self.subscribeSvc.careerApply(this.model.user).then(function(response){
                console.log(response);
                self.subscribe.response = response.data;
                self.$timeout(function () {
                    self.subscribe.response = null;
                }.bind(this), 4000);
            }.bind(this));
        }
    };

    return {
        templateUrl: 'front-assets/js/components/careerPage/careerPageCmp.view.html',
        controller: CareerPageCtrl
    };

});
