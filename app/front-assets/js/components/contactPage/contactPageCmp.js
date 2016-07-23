define(['angular', './components/components'], function() {

    angular
        .module('schnizelApp.components')
        .component('contactPage', {
            templateUrl: 'front-assets/js/components/contactPage/contactPageCmp.view.html',
            controller: ContactPageCtrl
        });

    function ContactPageCtrl() {
        console.log(2222);
    }

});
