define(['angular', './directives/directives'], function() {

    angular
        .module('schnizelApp.directives')
        .directive('uiDialog', function() {

            var ctrl = function() {

                var vm = this;
                vm.calcAndClose = function(){
                    vm.toggle(vm.dialogdata);
                    vm.isopened = false;
                };
            };

            return {
                restrict: 'AE',
                replace: true,
                templateUrl: 'front-assets/js/directives/uiDialog/uiDialog.view.html',
                controller: ctrl,
                controllerAs: 'vm',
                bindToController: true,
                scope: {
                    isopened: '=',
                    dialogdata: '<',
                    components: "<",
                    toggle: "&",
                    closedialog: "&"
                },
                link: function(scope, element, attrs) {}
            };
        });
});
