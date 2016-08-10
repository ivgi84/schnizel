define(['angular', './directives/directives','slickJs'], function() {

    angular
        .module('schnizelApp.directives')
        .directive('slickSlider', function($timeout) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var obj = scope.$eval(attrs.slickSlider)
                        obj.customPaging = function (slider, i) {
                            var elm = '<button class="tab">' + $('#'+element.attr('id') + '+ .slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
                            return elm;
                        }

                    $timeout(function() {
                        $(element).slick(obj);
                    },200);
                }
            };
        });
});
