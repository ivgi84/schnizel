define(['angular', './directives'], function() {

    angular
        .module('schnizelApp.directives')
        .directive('openDescription', function($timeout) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    $(element).on('click', function() {
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
                    $(element).on('click', function() {
                        $('.item').removeClass('opened');
                        $('.description').slideUp(400);
                    })
                }
            };
        });

    angular
        .module('schnizelApp.directives')
        .directive('effectIfInView', function($timeout) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    $(window).on('scroll', function(){
                        var pageTop = $(window).scrollTop();
                        var pageBottom = pageTop + $(window).height();
                        var elementTop = $(element).offset().top;
                        var elementBottom = elementTop + $(element).height();

                        //console.log(pageTop, elementTop, pageBottom, elementBottom);

                        if((pageTop < elementTop) && (pageBottom > elementBottom)){
                            $('.'+attrs.effectIfInView).addClass('staticView');
                        }
                        else {
                            $('.'+attrs.effectIfInView).removeClass('staticView');
                        }
                    });
                }
            };
        });

});
