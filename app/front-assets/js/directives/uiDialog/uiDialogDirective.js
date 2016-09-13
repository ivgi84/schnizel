define(['angular', './directives/directives'], function() {

    angular
        .module('schnizelApp.directives')
        .directive('uiDialog', function() {
            return {
                restrict: 'AE',
                replace:true,
                templateUrl:'front-assets/js/directives/uiDialog/uiDialog.view.html',
                scope:{
                    isopened:'=',
                    dialogdata:'=',
                    components:"<",
                    toggle:"&",
                    closedialog:"&"
                },
                link: function(scope, element, attrs) {
                    debugger;
                }
            };
        });
});
