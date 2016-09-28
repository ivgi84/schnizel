define(['angular', './components/components', 'scrollMagic'], function(angular, components, scrollMagic) {
    debugger;
    var controller = new scrollMagic.controller();

    var blockTween = new TweenMax.to('#block', 1.5, {
        backgroundColor: 'red'
    });

    var containerScene = new ScrollMagic.Scene({
            triggerElement: '#container'
        })
        .setTween(blockTween)
        .addIndicators()
        .addTo(controller);

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