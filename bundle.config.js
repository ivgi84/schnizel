module.exports = {
  bundle: {
    main: {
      scripts: [
        'app/front-assets/js/components/siteNav/siteNavCmp.js',
        'app/front-assets/js/components/siteFooter/siteFooterCmp.js',
        'app/front-assets/js/components/homePage/homePageCmp.js',
        'app/front-assets/js/components/contactPage/contactPageCmp.js',
        'app/front-assets/js/components/nutritionPage/nutritionPageCmp.js',
        'app/front-assets/js/components/menuPage/menuPageCmp.js',
        'app/front-assets/js/components/storyPage/storyPageCmp.js',
        'app/front-assets/js/components/branchesPage/branchesPageCmp.js',
        'app/front-assets/js/directives/slick/slickDirective.js',
        'app/front-assets/js/directives/slick/uiDialogDirective.js'
      ],
      styles: 'app/front-assets/css/master.css'
    },
    vendor: {
      scripts: [
        'app/front-assets/js/lib/vendor/underscore-min.js',
        'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
        'app/front-assets/js/lib/angular.min.js',
        'app/front-assets/js/lib/angular-route.min',
        'app/front-assets/js/lib/vendor/angular-animate.min.js',
        'app/front-assets/js/lib/vendor/vendor/slick.min.js',
        'app/front-assets/js/lib/vendor/vendor/TweenMax.min.js',
        'app/front-assets/js/lib/vendor/vendor/ScrollMagic.js',
        'app/front-assets/js/lib/vendor/vendor/ScrollMagic.js',
        'app/front-assets/js/lib/vendor/vendor/ScrollMagic.js',
        'app/front-assets/js/lib/vendor/vendor/ScrollMagic.js',
      ]
    }
  },
  copy: [
    'app/front-assets/images/**/*.{png,svg,jpg}',
    'app/front-assets/fonts/*.*',
    'app/front-assets/index.html/',
    'app/back-assets/data/*.json'
  ]
};
