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
                            title: 'ארוחה בצלחת',
                            describtion: 'נתח לבקשתך, מוגש בצלחת עם מבחר של 3 תוספות חמות / סלטים טריים, רטבים לבקשתך, ירקות כבושים ופיתה חמה.'
                        }
                    },
                    thumb: {
                        img: 'top-slider-thumb-1.jpg',
                        title: 'ארוחה בצלחת'
                    }
                },
                {
                    slide: {
                        img: 'top-slider-1.jpg',
                        text: {
                            title: 'ארוחה בבגט',
                            describtion: 'בגט טרי מחומם בתנור, בתוכו מוגש הנתח שביקשת, עם מבחר ממרחים וסלטים שהוכנו במקום, ירקות טריים.'
                        }
                    },
                    thumb: {
                        img: 'top-slider-thumb-1.jpg',
                        title: 'ארוחה בבגט'
                    }
                },
                {
                    slide: {
                        img: 'top-slider-1.jpg',
                        text: {
                            title: 'ארוחה בפיתה',
                            describtion: 'פיתה מיוחדת בעבודת יד, בתוכה מוגש הנתח שביקשת, עם מבחר ממרחים וסלטים שהוכנו במקום, ירקות טריים.'
                        }
                    },
                    thumb: {
                        img: 'top-slider-thumb-1.jpg',
                        title: 'ארוחה בפיתה'
                    }
                },
                {
                    slide: {
                        img: 'top-slider-1.jpg',
                        text: {
                            title: 'סלט',
                            describtion: "סלט קצוץ או סלט חסות טרי, מעליו לבחירתך רצועות קריספי צ'יקן או פילה עוף בפלנצ'ה עם רטבים."
                        }
                    },
                    thumb: {
                        img: 'top-slider-thumb-1.jpg',
                        title: 'סלט'
                    }
                },
                {
                    slide: {
                        img: 'top-slider-1.jpg',
                        text: {
                            title: 'טורטייה',
                            describtion: 'טורטייה מגולגלת עם עוף מעושן שהוכן במקום, עלי ארגולה עגבניות ומיונז.'
                        }
                    },
                    thumb: {
                        img: 'top-slider-thumb-1.jpg',
                        title: 'טורטייה'
                    }
                },
                {
                    slide: {
                        img: 'top-slider-1.jpg',
                        text: {
                            title: 'צמחוני',
                            describtion: 'שניצל תירס צמחוני מיוחד תוצרת בית,  או קציצת טופו, כרובית ותרד  מוגש בצלחת עם מבחר של 3 תוספות חמות / סלטים טריים, רטבים לבקשתך, ירקות כבושים ופיתה חמה.'
                        }
                    },
                    thumb: {
                        img: 'top-slider-thumb-1.jpg',
                        title: 'צמחוני'
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
                        title: 'משאקה 1'
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
                        title: 'משאקה 2'
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
                        title: 'משאקה 3'
                    }
                }]
            },
        };

        vm.init();

    }

    MenuPageCtrl.prototype = {

        init: function init(){
            this.getMenu();
        },

        getMenu: function getMenu(){
            var self = this;
            this.baseService.getJson('menu').then(function(response){
                self.ingredients = response;
            });
        }
    }

});
