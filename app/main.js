require.config({
    baseUrl: 'front-assets/js',
    paths: {
        'angular': 'lib/angular.min',
        'ngRoute': 'lib/angular-route.min',
        //components
        'hpCmp':'components/homePage/homePageCmp',
        'contactCmp': 'components/contactPage/contactPageCmp',
        'nutritionCmp':'components/nutritionPage/nutritionPageCmp',
        'menuCmp': 'components/menuPage/menuPageCmp',
        'storyCmp': 'components/storyPage/storyPageCmp',
        'navCmp': 'components/siteNav/siteNavCmp'
    },
    shim: {
        'angular': { exports: 'angular' },
        'ngRoute': { exports: 'ngRoute', deps: ['angular'] },
        'app':{ deps: ['angular', 'ngRoute'] },
    }
});

require(['app'], function(){
    setTimeout(function(){
        angular.bootstrap(document, ['schnizelApp']);
    },0);
});
