var pageDeps = { deps: ['navCmp','footerCmp'] };

require.config({
    baseUrl: 'front-assets/js',
    paths: {
        'jquery':'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
        'angular': 'lib/angular.min',
        'ngRoute': 'lib/angular-route.min',
        'ngAnimate': 'lib/angular-animate.min',

        //slickSlider
        'slickJs':'lib/vendor/slick.min',

        //common
        'navCmp': 'components/siteNav/siteNavCmp',
        'footerCmp': 'components/siteFooter/siteFooterCmp',

        //components
        //pages
        'hpCmp':'components/homePage/homePageCmp',
        'contactCmp': 'components/contactPage/contactPageCmp',
        'nutritionCmp':'components/nutritionPage/nutritionPageCmp',
        'menuCmp': 'components/menuPage/menuPageCmp',
        'storyCmp': 'components/storyPage/storyPageCmp',

        //directives
        'slickDirective':'directives/slick/slickDirective'
    },
    shim: {
        'angular': { exports: 'angular' },
        'jquery': { exports: 'jquery' },
        'ngRoute': { exports: 'ngRoute', deps: ['angular'] },
        'ngAnimate': { exports: 'ngAnimate', deps: ['angular'] },
        'slickjs': {exports: 'slickjs', deps: ['jquery'] },
        'app':{ deps: ['angular', 'ngRoute'] },
        'hpCmp': pageDeps,
        'contactCmp': pageDeps,
        'nutritionCmp': pageDeps,
        'menuCmp': pageDeps,
        'storyCmp': pageDeps
    }
});

require(['app'], function(){
    setTimeout(function(){
        angular.bootstrap(document, ['schnizelApp']);
    },100);
});
