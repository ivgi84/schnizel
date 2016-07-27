define(['angular','./directives/directives', './components/components', 'slickJs', 'slickDirective'], function() {

    angular
        .module('schnizelApp.components')
        .component('homePage', {
            templateUrl: 'front-assets/js/components/homePage/homePage.view.html',
            controller: HomePageCtrl,
            require : ['^siteNav','^siteFooter']
        });

    function HomePageCtrl() {

            console.log(111);

        this.slides = [
            { img:'slide_1' },
            { img:'slide_1' },
            { img:'slide_1' }
        ];
    }

});
