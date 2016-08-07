define(['angular', './components/components'], function() {

    angular
        .module('schnizelApp.components')
        .component('contactPage', {
            templateUrl: 'front-assets/js/components/contactPage/contactPageCmp.view.html',
            controller: ContactPageCtrl
        });

    function ContactPageCtrl() {

        var vm = this;

        vm.model= {
            user:{
                name:'',
                tel:'',
                email:'',
                message:''
            }
        };

        var faq = {
            "title": "Title",
            "gold": [{
                "title": "What is the best way to trade",
                "text": "answer answer answer answer answer "
            }, {
                "title": "What is the best way to trade",
                "text": "answer answer answer answer answer "
            }, {
                "title": "What is the best way to trade",
                "text": "answer answer answer answer answer "
            }, {
                "title": "What is the best way to trade",
                "text": "answer answer answer answer answer "
            }, {
                "title": "What is the best way to trade",
                "text": "answer answer answer answer answer "
            }]
        };
    }

    ContactPageCtrl.prototype = {
        sentMessage: function sendMessage(){
            
        }
    };

});
