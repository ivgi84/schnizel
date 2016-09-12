define(['angular', './directives/directives'], function() {

    angular
        .module('schnizelApp.directives')
        .directive('uiDialog', function() {
            return {
                restrict: 'AE',
                replace:true,
                templateUrl:'front-assets/js/directives/uiDialog/uiDialog.view.html',
                scope:{
                    isVisible:"<",
                    ingreds:"<",
                    components:"<",
                    toggle:"&"
                },
                link: function(scope, element, attrs) {

                }
            };
        });
});
