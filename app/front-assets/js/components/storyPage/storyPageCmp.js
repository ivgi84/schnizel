define(['angular', './components/components', 'TweenMax', 'ScrollMagic', 'animationgsap'],
  function(angular, components, TweenMax, ScrollMagic, animationgsap) {

    angular
        .module('schnizelApp.components')
        .component('storyPage', {
            templateUrl: 'front-assets/js/components/storyPage/storyPageCmp.view.html',
            controller: StoryPageCtrl
        });

    function StoryPageCtrl() {

        this.$postLink = function(){

          var screenContents = $('.screenContent');

          var count = screenContents.length;
          var height = screenContents.innerHeight() * count;

          $('.images').css({
            'height': height+'px',
            'top':'-'+ height+'px'
          });

          var duration = height;


            var controller = new ScrollMagic.Controller();

            var scene = new ScrollMagic.Scene({
									triggerElement: "#logo-trigger"
								})
								.setTween("#s-logo", 0.3, { scale: 1.3})
								.addTo(controller);

  // build scenes

  new ScrollMagic.Scene({triggerElement: "#logo-trigger", duration: duration})
          .setTween("#images", {top: 1500 +'px'})
          .addTo(controller);
        }

    }

});
