(function() {

    angular
    .module('schnizelApp', ['ngRoute']);

    angular
    .module('schnizelApp')
    .config(config);

    function config($routeProvider){
        $routeProvider
        .when('/',{
            template:'<home-page>',
        })
        .when('/contact',{
            template:'<contact-page>'
        })
    }

})(window.angular);
