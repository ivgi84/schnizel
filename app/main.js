requirejs.config({
    baseUrl: 'front-assets/js',
    paths: {
        'angular': 'lib/angular.min',
        'route': 'lib/angular-route.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'route': {
            deps: ['angular']
        }
    }
});

require(['angular','app'], function(){
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['schnizelApp']);
    });
});
