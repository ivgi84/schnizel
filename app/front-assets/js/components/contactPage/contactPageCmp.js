define(['angular', './components/components', './services/services', './services/faq.service'], function() {

    angular
        .module('schnizelApp.components')
        .component('contactPage', {
            templateUrl: 'front-assets/js/components/contactPage/contactPageCmp.view.html',
            controller: ContactPageCtrl
        });

    ContactPageCtrl.$inject = ['subscribeSvc', 'faqService'];

    function ContactPageCtrl(subscribeSvc, faqService) {

        var vm = this;
        vm.subscribeSvc = subscribeSvc;
        vm.faqService = faqService;

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
            this.faqService.getFaqList().then(function(resposne) {
                self.faq = resposne;
            });
        }

    };

});
