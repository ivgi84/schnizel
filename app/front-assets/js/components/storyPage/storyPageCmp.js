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

            var controller = new ScrollMagic.Controller();

            var scene = new ScrollMagic.Scene({
									triggerElement: "#logo-trigger"
								})
								.setTween("#s-logo", 0.3, { scale: 1.3})
								.addIndicators({name: "logo encrease"})
								.addTo(controller);

  // build scenes
  new ScrollMagic.Scene({triggerElement: "#parallax1", duration: 1000})
          .setTween("#parallax1 > img", {top: window.innerHeight+'px'})
          .addIndicators({name: "set 1"})
          .addTo(controller);
  //
  // new ScrollMagic.Scene({triggerElement: "#parallax2"})
  //         .setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
  //         .addTo(controller);
  //
  // new ScrollMagic.Scene({triggerElement: "#parallax3"})
  //         .setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
  //         .addTo(controller);
  //


        }

    }

});
