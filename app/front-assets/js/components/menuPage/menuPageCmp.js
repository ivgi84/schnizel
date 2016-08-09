define(['angular', './components/components', 'slickDirective'], function() {

    angular
        .module('schnizelApp.components')
        .component('menuPage', {
            templateUrl: 'front-assets/js/components/menuPage/menuPageCmp.view.html',
            controller: MenuPageCtrl,
            require: ['^siteNav', '^siteFooter']
        });

    function MenuPageCtrl() {
        var vm = this;

        vm.slider = {
            settings: {
                dots: true,
                arrows: true,
                draggable: true,
                slidesToShow: 1,
                infinite: true
            },
            slides: [{
                img: 'slide_1'
            }, {
                img: 'slide_1'
            }, {
                img: 'slide_1'
            }]
        }

    }

});
