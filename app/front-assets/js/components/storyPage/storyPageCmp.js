define(['angular', 'TweenMax', 'ScrollMagic', 'animationgsap'],
    function(angular, TweenMax, ScrollMagic, animationgsap) {

        function StoryPageCtrl() {

            this.$postLink = function() {

                var videoTags = document.getElementsByTagName('video') || [];
                angular.forEach(videoTags, function(video, ind){
                    video.play();
                    video.addEventListener('click', function() {
                        video.play();
                    }, false);
                })

                var screenContents = $('.screenContent');

                var count = screenContents.length;
                var height = screenContents.innerHeight() * count;

                $('.images').css({
                    'height': height + 'px',
                    'top': '-' + height + 'px'
                });

                var duration = height;

                var controller = new ScrollMagic.Controller();

                var scene = new ScrollMagic.Scene({
                        triggerElement: "#logo-trigger"
                    })
                    .setTween("#s-logo", 0.3, {
                        scale: 1.3
                    })
                    .addTo(controller);

                // build scenes

                new ScrollMagic.Scene({
                        triggerElement: "#logo-trigger",
                        duration: duration
                    })
                    .setTween("#images", {
                        top: 1500 + 'px'
                    })
                    .addTo(controller);
            };

        }

        return {
            templateUrl: 'front-assets/js/components/storyPage/storyPageCmp.view.html',
            controller: StoryPageCtrl
        };

    });
