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
                name: '',
                tel: '',
                email: '',
                message: ''
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
            if(self.careerForm.$valid){
                self.subscribeSvc.careerApply(this.model.user).then(function(response){
                    console.log(response);
                    self.subscribe.response = response.data;
                    self.$timeout(function () {
                        self.subscribe.response = null;
                    }, 4000);
                });
            }
            else{
                console.log('Form is not valid');
            }

        }
    };

    return {
        templateUrl: 'front-assets/js/components/careerPage/careerPageCmp.view.html',
        controller: CareerPageCtrl
    };

});
