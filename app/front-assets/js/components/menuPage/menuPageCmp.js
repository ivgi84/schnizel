define(['angular',
     'slickDirective',
     '../../services/base.service',
     '../../directives/toggleDescription.directive'], function() {

        MenuPageCtrl.$inject = ['baseService', '$routeParams'];

    function MenuPageCtrl(baseService, $routeParams) {
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
                infinite: true,
                autoplay: true,
                autoplaySpeed: 6000,
                pauseOnHover:false,
                initialSlide: !!$routeParams.slide ? +$routeParams.slide : 0
            },
            top: {
                slides: [{
                    slide: {
                        img: 'slidePlate.jpg',
                        text: {
                            title: 'ארוחה בצלחת',
                            describtion: 'נתח לבקשתך, מוגש בצלחת עם מבחר של 3 תוספות חמות / סלטים טריים, רטבים לבקשתך, ירקות כבושים ופיתה חמה.'
                        }
                    },
                    thumb: {
                        img: 'iconPlate.jpg',
                        title: 'ארוחה בצלחת'
                    }
                },
                {
                    slide: {
                        img: 'slideBaget.jpg',
                        text: {
                            title: 'ארוחה בבגט',
                            describtion: 'בגט טרי מחומם בתנור, בתוכו מוגש הנתח שביקשת, עם מבחר ממרחים וסלטים שהוכנו במקום, ירקות טריים.'
                        }
                    },
                    thumb: {
                        img: 'iconBaget.jpg',
                        title: 'ארוחה בבגט'
                    }
                },
                {
                    slide: {
                        img: 'slidePita.jpg',
                        text: {
                            title: 'ארוחה בפיתה',
                            describtion: 'פיתה מיוחדת בעבודת יד, בתוכה מוגש הנתח שביקשת, עם מבחר ממרחים וסלטים שהוכנו במקום, ירקות טריים.'
                        }
                    },
                    thumb: {
                        img: 'iconPita.jpg',
                        title: 'ארוחה בפיתה'
                    }
                },
                {
                    slide: {
                        img: 'slideSalad.jpg',
                        text: {
                            title: 'סלט',
                            describtion: "סלט קצוץ או סלט חסות טרי, מעליו לבחירתך רצועות קריספי צ'יקן או פילה עוף בפלנצ'ה עם רטבים."
                        }
                    },
                    thumb: {
                        img: 'iconSalad.jpg',
                        title: 'סלט'
                    }
                }
                // ,{
                //     slide: {
                //         img: 'slideTortilla.jpg',
                //         text: {
                //             title: 'טורטייה',
                //             describtion: 'טורטייה מגולגלת עם עוף מעושן שהוכן במקום, עלי ארגולה עגבניות ומיונז.'
                //         }
                //     },
                //     thumb: {
                //         img: 'iconTortilla.jpg',
                //         title: 'טורטייה'
                //     }
                // }
                // ,{
                //     slide: {
                //         img: 'slideVegetarian.jpg',
                //         text: {
                //             title: 'צמחוני',
                //             describtion: 'שניצל תירס צמחוני מיוחד תוצרת בית,  או קציצת טופו, כרובית ותרד  מוגש בצלחת עם מבחר של 3 תוספות חמות / סלטים טריים, רטבים לבקשתך, ירקות כבושים ופיתה חמה.'
                //         }
                //     },
                //     thumb: {
                //         img: 'iconVegetarian.jpg',
                //         title: 'צמחוני'
                //     }
                // }
            ]
            },
            bottom: {
                slides: [{
                    slide: {
                        img: 'slide_drinks_01.jpg'
                    },
                    thumb: {
                        img: 'iconDrink_01.png'
                    }
                },
                {
                    slide: {
                        img: 'slide_drinks_02.jpg'
                    },
                    thumb: {
                        img: 'iconDrink_02.jpg'
                    }
                },
                {
                    slide: {
                        img: 'slide_drinks_03.jpg'
                    },
                    thumb: {
                        img: 'iconDrink_03.jpg'
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
    };

    return {
        templateUrl: 'front-assets/js/components/menuPage/menuPageCmp.view.html',
        controller: MenuPageCtrl
    };

});
