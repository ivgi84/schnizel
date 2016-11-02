define(['angular',
    '../../services/services',
    '../../services/base.service'], function() {

    ContactPageCtrl.$inject = ['subscribeSvc', 'baseService'];

    function ContactPageCtrl(subscribeSvc, baseService) {

        var vm = this;
        vm.subscribeSvc = subscribeSvc;
        vm.baseService = baseService;

        vm.model = {
            user: {
                name: '',
                tel: '',
                email: '',
                message: ''
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
        sentMessage: function sendMessage() {
            this.subscribeSvc.sentMessage();
        },
        getFaqList: function getFaqList() {
            var self = this;
            this.baseService.getJson('faq').then(function(resposne) {
                console.log(resposne);
                self.faq = resposne;
            });
        }

    };

    return {
        templateUrl: 'front-assets/js/components/contactPage/contactPageCmp.view.html',
        controller: ContactPageCtrl
    };

});
