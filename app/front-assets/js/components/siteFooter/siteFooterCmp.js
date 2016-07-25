define(['angular', './components/components'], function() {

    angular
        .module('schnizelApp.components')
        .component('siteFooter', {
            templateUrl: 'front-assets/js/components/siteFooter/siteFooterCmp.view.html',
            controller: SiteFooterCtrl
        });

    function SiteFooterCtrl () {
        console.log('siteFooterCtrl');
    }

});
