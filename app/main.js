var pageDeps = { deps: ['navCmp', 'footerCmp'] };

require.config({
    baseUrl: 'front-assets/js',
    paths: {
        '_': 'lib/vendor/underscore-min',
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
        'angular': 'lib/angular.min',
        'ngRoute': 'lib/angular-route.min',
        'ngAnimate': 'lib/angular-animate.min',

        //slickSlider
        'slickJs': 'lib/vendor/slick.min',

        
        // 'tweenMax': 'lib/vendor/TweenMax',
        // 'timelineMax':'lib/vendor/TimelineMax',
        // 'timelineLite':'lib/vendor/TimelineLite',
        // 'tweenLite':'lib/vendor/TweenLite',
        // 'animation':'lib/vendor/animation.gsap',
        // 'gsap':'lib/vendor/jquery.gsap',

        //test
        'tweenMax': 'lib/vendor/test/TweenMax.min',
        'ScrollMagic': 'lib/vendor/test/ScrollMagic',
        'animationgsap': 'lib/vendor/test/animation.gsap',
        'addIndicators': 'lib/vendor/test/debug.addIndicators',

        //ScrollMagic
        'scrollMagic': 'lib/vendor/ScrollMagic',

        //common
        'navCmp': 'components/siteNav/siteNavCmp',
        'footerCmp': 'components/siteFooter/siteFooterCmp',

        //components
        //pages
        'hpCmp': 'components/homePage/homePageCmp',
        'contactCmp': 'components/contactPage/contactPageCmp',
        'nutritionCmp': 'components/nutritionPage/nutritionPageCmp',
        'menuCmp': 'components/menuPage/menuPageCmp',
        'storyCmp': 'components/storyPage/storyPageCmp',
        'branchesCmp': 'components/branchesPage/branchesPageCmp',

        //directives
        'slickDirective': 'directives/slick/slickDirective',
        'uiDialog': 'directives/uiDialog/uiDialogDirective'
    },
    shim: {
        'angular': { exports: 'angular' },
        '_': { exports: '_' },
        'jquery': { exports: 'jquery' },
        'ngRoute': { exports: 'ngRoute', deps: ['angular'] },
        'ngAnimate': { exports: 'ngAnimate', deps: ['angular'] },
        'slickjs': { exports: 'slickjs', deps: ['jquery'] },


        'tweenMax': { exports: 'tweenMax'},
        'ScrollMagic': { exports: 'ScrollMagic'},
        'animationgsap': { exports: 'animationgsap'},
        'addIndicators': { exports: 'addIndicators'},

        // 'animation': { exports: 'animation', deps:['scrollMagic']},
        // 'gsap': { exports: 'gsap', deps:['jquery']},
        // 'tweenMax': { exports: 'tweenMax'},
        // 'tweenLite': { exports: 'tweenLite', deps:['tweenMax']},
        // 'timelineMax': { exports: 'timelineMax', deps:['tweenLite']},
        // 'timelineLite': { exports: 'timelineLite', deps:['tweenLite']},
        // 'scrollMagic': { exports: 'scrollMagic', deps:['gsap','tweenMax','timelineMax','timelineLite']},
        
    
        'app': { deps: ['angular', 'ngRoute'] },
        'hpCmp': pageDeps,
        'contactCmp': pageDeps,
        'nutritionCmp': pageDeps,
        'menuCmp': pageDeps,
        'storyCmp': pageDeps,
        'branchesCmp': pageDeps
    }
});

require(['app'], function() {
    setTimeout(function() {
        angular.bootstrap(document, ['schnizelApp']);
    }, 100);
});
