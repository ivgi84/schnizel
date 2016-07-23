define(['angular', './components/components'], function() {

    angular
        .module('schnizelApp.components')
        .component('siteNav', {
            templateUrl: 'front-assets/js/components/siteNav/siteNavCmp.view.html',
            controller: SiteNavCtrl
        });

    function siteNavCtrl () {
        console.log('Site nav ');
    }

});
