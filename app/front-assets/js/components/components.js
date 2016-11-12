define(['angular',
    './homePage/homePageCmp',
    './aboutPage/aboutPageCmp',
    './branchesPage/branchesPageCmp',
    './contactPage/contactPageCmp',
    './menuPage/menuPageCmp',
    './nutritionPage/nutritionPageCmp',
    './storyPage/storyPageCmp',
    './careerPage/careerPageCmp',
    './siteNav/siteNavCmp',
    './siteFooter/siteFooterCmp',
], function(angular,
  homePageCmp,
   aboutPageCmp,
    branchesPageCmp,
    contactPageCmp,
    menuPageCmp,
    nutritionPageCmp,
    storyPageCmp,
    careerPage,
    siteNavCmp,
    siteFooterCmp){
  var module = angular.module('schnizelApp.components',[]);

    module.component('homePage', homePageCmp);
    module.component('aboutPage', aboutPageCmp);
    module.component('branchesPage', branchesPageCmp);
    module.component('contactPage', contactPageCmp);
    module.component('menuPage', menuPageCmp);
    module.component('nutritionPage', nutritionPageCmp);
    module.component('storyPage', storyPageCmp);
    module.component('careerPage', careerPage);
    module.component('siteNav', siteNavCmp);
    module.component('siteFooter', siteFooterCmp);

});
