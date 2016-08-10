define(['angular', './directives'], function() {

    angular
        .module('schnizelApp.directives')
        .directive('openDescription', function($timeout) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    $(element).on('click', function(){
                        $('.description').hide();
                        $(this).next('.description').show();
                    })
                }
            };
        });

        angular
            .module('schnizelApp.directives')
            .directive('closeDescription', function($timeout) {
                return {
                    restrict: 'A',
                    link: function(scope, element) {
                        $(element).on('click', function(){
                            $('.description').hide();
                        })
                    }
                };
            });

});
