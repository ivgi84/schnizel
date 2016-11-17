define(['angular',
    '../../services/services',
    '../../services/base.service'], function() {

    ContactPageCtrl.$inject = ['subscribeSvc', 'baseService', '$timeout'];

    function ContactPageCtrl(subscribeSvc, baseService, $timeout) {

        var vm = this;
        vm.subscribeSvc = subscribeSvc;
        vm.baseService = baseService;
        vm.$timeout = $timeout;

        vm.subscribe = {
            response:null
        };

        vm.model = {
            user: {
                name: null,
                tel: null,
                email: null,
                message: null
            }
        };

        vm.faq = [];

        vm.isMobile = {
            screenSize: function() {
                return window.innerWidth < 767;
            }
        };

        vm.$onInit = function $onInit() {
            this.getFaqList();
        };
    }

    ContactPageCtrl.prototype = {
        sendMessage: function sendMessage() {
            var self = this;
            this.subscribeSvc.sendMessage(this.model.user).then(function(response){
                self.subscribe.response = response.data;
                self.$timeout(function () {
                    self.subscribe.response = null;
                }, 4000);
            });
        },
        getFaqList: function getFaqList() {
            var self = this;
            this.baseService.getJson('faq').then(function(response) {
                self.faq = response;
            });
        }

    };

    return {
        templateUrl: 'front-assets/js/components/contactPage/contactPageCmp.view.html',
        controller: ContactPageCtrl
    };

});
