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

        //TweenMax
        'tweenMax': 'lib/vendor/TweenMax.min',

        //ScrollMagic
        'scrollMagic': 'lib/vendor/ScrollMagic',
        //scrollMagic debug
        'scrollMagicDebug': 'lib/vendor/scrollmagic.debug',

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
        'tweenMax': { exports: 'tweenMax' },
        'scrollMagic': { exports: 'scrollMagic', deps: ['jquery', 'tweenMax'] },
        'scrollMagicDebug': { exports: 'scrollMagicDebug', deps: ['scrollMagic'] },
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