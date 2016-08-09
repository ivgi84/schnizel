define(['angular', './directives/directives','slickJs'], function() {

    angular
        .module('schnizelApp.directives')
        .directive('slickSlider', function($timeout) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    debugger;
                    var obj = scope.$eval(attrs.slickSlider)
                    //if(attrs.slickSlider.customThumb)
                        obj.customPaging = function (slider, i) {
                            return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
                        }

                    $timeout(function() {
                        $(element).slick(obj);
                    },200);
                }
            };
        });
});
