define(['angular', './directives/directives'], function() {

    angular
        .module('schnizelApp.directives')
        .directive('slickSlider', function($timeout) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    $timeout(function() {
                        $(element).slick(scope.$eval(attrs.slickSlider));
                    },200);
                }
            };
        });
});
