define(['angular', './directives'], function() {

    angular
        .module('schnizelApp.directives')
        .directive('openDescription', function($timeout) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    $(element).on('click', function(){
                        $('.item').removeClass('opened');
                        $('.description').hide();
                        $(this).next('.description').fadeIn(400);
                        $(element).addClass('opened');

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
                            $('.item').removeClass('opened');
                            $('.description').slideUp(400);
                        })
                    }
                };
            });

});
