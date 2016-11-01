define(['angular', './components/components'], function() {

    angular
        .module('schnizelApp.components')
        .component('aboutPage', {
            templateUrl: 'front-assets/js/components/aboutPage/aboutPageCmp.view.html',
            controller: AboutPageCtrl
        });

    AboutPageCtrl.$inject = [];

    function AboutPageCtrl() {

    }

    AboutPageCtrl.prototype = {

    };

});
