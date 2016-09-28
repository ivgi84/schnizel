define(['angular', './components/components', 'scrollMagic'], function() {

    angular
        .module('schnizelApp.components')
        .component('storyPage', {
            templateUrl: 'front-assets/js/components/storyPage/storyPageCmp.view.html',
            controller: StoryPageCtrl
        });

    function StoryPageCtrl() {
        console.log('storyPageCtrl');
    }

});