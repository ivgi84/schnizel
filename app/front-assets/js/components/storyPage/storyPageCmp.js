define(['angular', './components/components', 'tweenMax', 'ScrollMagic', 'animationgsap','addIndicators'], 
  function(angular, components, tweenMax, ScrollMagic, animationgsap, addIndicators) {
  
    angular
        .module('schnizelApp.components')
        .component('storyPage', {
            templateUrl: 'front-assets/js/components/storyPage/storyPageCmp.view.html',
            controller: StoryPageCtrl
        });

    function StoryPageCtrl() {
        console.log('storyPageCtrl');

        this.$postLink = function(){

            var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

  // build scenes
  new ScrollMagic.Scene({triggerElement: "#parallax1"})
          .setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
          .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#parallax2"})
          .setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
          .addTo(controller);

  new ScrollMagic.Scene({triggerElement: "#parallax3"})
          .setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
          .addTo(controller);
    


        }

    }

});
