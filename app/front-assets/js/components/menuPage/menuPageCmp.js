define(['angular',
     './components/components',
     'slickDirective',
     './services/base.service',
     './directives/toggleDescription.directive'], function() {

    angular
        .module('schnizelApp.components')
        .component('menuPage', {
            templateUrl: 'front-assets/js/components/menuPage/menuPageCmp.view.html',
            controller: MenuPageCtrl,
            require: ['^siteNav', '^siteFooter']
        });

        MenuPageCtrl.$inject = ['baseService'];

    function MenuPageCtrl(baseService) {
        var vm = this;
        vm.baseService = baseService;
        vm.ingredients= [];
        vm.isOpened = false;
        vm.sliders = {
            settings: {
                dots: true,
                arrows: true,
                draggable: true,
                slidesToShow: 1,
                infinite: true
            },
            top: {
                slides: [{
                    slide: {
                        img: 'top-slider-1.jpg',
                        text: {
                            title: 'טייטל',
                            describtion: 'איזה טקסט'
                        }
                    },
                    thumb: {
                        img: 'top-slider-thumb-1.jpg',
                        title: 'שניצל'
                    }
                },
                {
                    slide: {
                        img: 'top-slider-1.jpg',
                        text: {
                            title: 'טייטל',
                            describtion: 'איזה טקסט'
                        }
                    },
                    thumb: {
                        img: 'top-slider-thumb-1.jpg',
                        title: 'שניצל'
                    }
                },
                {
                    slide: {
                        img: 'top-slider-1.jpg',
                        text: {
                            title: 'טייטל',
                            describtion: 'איזה טקסט'
                        }
                    },
                    thumb: {
                        img: 'top-slider-thumb-1.jpg',
                        title: 'שניצל'
                    }
                }]
            },
            bottom: {
                slides: [{
                    slide: {
                        img: 'bottom-slider-1.jpg',
                        text: {
                            title: 'טייטל',
                            describtion: 'איזה טקסט'
                        }
                    },
                    thumb: {
                        img: 'bottom-slider-thumb-1.png',
                        title: 'שניצל'
                    }
                },
                {
                    slide: {
                        img: 'bottom-slider-1.jpg',
                        text: {
                            title: 'טייטל',
                            describtion: 'איזה טקסט'
                        }
                    },
                    thumb: {
                        img: 'bottom-slider-thumb-1.png',
                        title: 'שתיה'
                    }
                },
                {
                    slide: {
                        img: 'bottom-slider-1.jpg',
                        text: {
                            title: 'טייטל',
                            describtion: 'איזה טקסט'
                        }
                    },
                    thumb: {
                        img: 'bottom-slider-thumb-1.png',
                        title: 'שתיה'
                    }
                }]
            },
        };

        vm.init();

    }

    MenuPageCtrl.prototype = {

        init: function init(){
            this.getIngredients();
        },

        getIngredients: function getIngredients(){
            var self = this;
            this.baseService.getJson('ingredients').then(function(response){
                console.log(response);
                self.ingredients = response;
            });
        }
    }

});
