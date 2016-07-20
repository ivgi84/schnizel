requirejs.config({
    baseUrl: 'front-assets/js',
    paths: {
        angular: 'lib/angular.min',
        $route: 'lib/angular-route.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        $route: {
            exports: '$route'
        }
    }
});

require([
    'schnizelApp'
]);
