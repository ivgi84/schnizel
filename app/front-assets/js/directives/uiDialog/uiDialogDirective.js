define(['angular', './directives/directives'], function() {

    angular
        .module('schnizelApp.directives')
        .directive('uiDialog', function() {
            return {
                restrict: 'AE',
                templateUrl:'front-assets/js/directives/uiDialog/uiDialog.view.html',
                link: function(scope, element, attrs) {

                }
            };
        });
});
