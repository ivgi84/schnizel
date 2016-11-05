var pageDeps = { deps: ['navCmp', 'footerCmp'] };

require.config({
    baseUrl: 'front-assets/js',
    paths: {
        '_': 'lib/vendor/underscore-min',
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
        'angular': 'https://code.angularjs.org/1.5.7/angular.min',
        'ngRoute': 'lib/angular-route.min',
        'ngAnimate': 'lib/angular-animate.min',

        //slickSlider
        'slickJs': 'lib/vendor/slick.min',

        //test
        'TweenMax': 'lib/vendor/TweenMax.min',
        'ScrollMagic': 'lib/vendor/ScrollMagic',
        'animationgsap': 'lib/vendor/animation.gsap',

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
        'aboutCmp': 'components/aboutPage/aboutPageCmp',

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


        'TweenMax': { exports: 'TweenMax'},
        'ScrollMagic': { exports: 'ScrollMagic'},
        'animationgsap': { exports: 'animationgsap', deps:['TweenMax']},


        'app': { deps: ['angular', 'ngRoute', 'ngAnimate'] },
        'hpCmp': pageDeps,
        'contactCmp': pageDeps,
        'nutritionCmp': pageDeps,
        'menuCmp': pageDeps,
        'storyCmp': pageDeps,
        'branchesCmp': pageDeps,
        'aboutCmp': pageDeps
    }
});

require(['app'], function() {
    setTimeout(function() {
        angular.bootstrap(document, ['schnizelApp']);
        document.getElementById('siteWrapper').classList.remove('mainLoader');
    }, 10);
});
