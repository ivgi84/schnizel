var pageDeps = { deps: ['navCmp','footerCmp'] };

require.config({
    baseUrl: 'front-assets/js',
    paths: {
        'angular': 'lib/angular.min',
        'ngRoute': 'lib/angular-route.min',
        //components
        //pages
        'hpCmp':'components/homePage/homePageCmp',
        'contactCmp': 'components/contactPage/contactPageCmp',
        'nutritionCmp':'components/nutritionPage/nutritionPageCmp',
        'menuCmp': 'components/menuPage/menuPageCmp',
        'storyCmp': 'components/storyPage/storyPageCmp',

        //common
        'navCmp': 'components/siteNav/siteNavCmp',
        'footerCmp': 'components/siteFooter/siteFooterCmp'
    },
    shim: {
        'angular': { exports: 'angular' },
        'ngRoute': { exports: 'ngRoute', deps: ['angular'] },
        'app':{ deps: ['angular', 'ngRoute'] },
        'hpCmp': pageDeps,
        'contactCmp': pageDeps,
        'nutritionCmp': pageDeps,
        'menuCmp': pageDeps,
        'storyCmp': pageDeps,

    }
});

require(['app'], function(){
    setTimeout(function(){
        angular.bootstrap(document, ['schnizelApp']);
    },0);
});
