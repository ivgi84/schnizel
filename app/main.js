require.config({
    baseUrl: 'front-assets/js',
    paths: {
        'angular': 'lib/angular.min',
        'ngRoute': 'lib/angular-route.min',
        'hpCmp':'components/homePage/homePageCmp'
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
    },10);
});
