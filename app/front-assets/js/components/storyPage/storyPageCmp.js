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

        var duration = 2000;

        this.$postLink = function(){

            var controller = new ScrollMagic.Controller();

            var scene = new ScrollMagic.Scene({
									triggerElement: "#logo-trigger"
								})
								.setTween("#s-logo", 0.3, { scale: 1.3})
								.addIndicators({name: "logo encrease"})
								.addTo(controller);

  // build scenes

  new ScrollMagic.Scene({triggerElement: ".s2", duration: duration})
          .setTween("#images", {top: 2000 +'px'})
          .addIndicators({name: "set 1"})
          .addTo(controller);

  // new ScrollMagic.Scene({triggerElement: ".s1", duration: duration})
  //         .setTween("#parallax1 > img", {top: window.innerHeight + 200 +'px'})
  //         .addIndicators({name: "set 1"})
  //         .addTo(controller);
  //
  // new ScrollMagic.Scene({triggerElement: ".s2", duration: duration})
  //         .setTween("#parallax2 > img", {top: window.innerHeight + 200 +'px'})
  //         .addIndicators({name: "set 2"})
  //         .addTo(controller);
  //
  // new ScrollMagic.Scene({triggerElement: ".s3", duration: duration})
  //         .setTween("#parallax3 > img", {top: window.innerHeight + 200 +'px'})
  //         .addIndicators({name: "set 3"})
  //         .addTo(controller);
  //
  // new ScrollMagic.Scene({triggerElement: ".s1", duration: duration})
  //         .setTween("#parallax4 > img", {top: window.innerHeight + 200 +'px'})
  //         .addIndicators({name: "set 4"})
  //         .addTo(controller);



        }

    }

});
