$(document).ready(function() {
    slide1 = $('.slide');
    slide1.waypoint(
        function(event, direction) {
            //cache the variable of the data-slide attribute associated with each slide
            dataslide0 = $(this).attr('data-slide');
            dataslide1C = 'slide' + dataslide0; //Current
            dataslide2P = 'slide' + (dataslide0 - 1); //Previous
            dataslide3 = parseInt(dataslide0) + 1;
            dataslide4N = 'slide' + dataslide3; //Next
            //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
            //remove the active class from the previous navigation link
            if (direction === 'down') {
                $('.slide[data-slide="' + dataslide0 + '"]')
                    .addClass('slectedDiv')
                    .prev()
                    .removeClass('slectedDiv');

                $('section[id="' + dataslide1C + '"] audio').addClass('active');
                $('section[id="' + dataslide2P + '"] audio')
                    .trigger('pause')
                    .removeClass('active')
                    .animate({
                            volume: 1
                        },
                        1000
                    );
                $('section[id="' + dataslide4N + '"] audio')
                    .trigger('pause')
                    .removeClass('active')
                    .animate({
                            volume: 1
                        },
                        1000
                    );
                if (pausedNot === true && !$('.game-based-temp').hasClass('active')) {
                    $('section[id="' + dataslide1C + '"] audio.active').trigger('play');
                }
                $('section[id="' + dataslide1C + '"] audio.active').animate({
                        volume: 1
                    },
                    1000
                );
                // if($('.main-sec').hasClass('slectedDiv')){
                //     $('.bg1').fadeIn();
                // }else{
                //     $('.bg1').fadeOut();
                // }

                for (var i = 0; i < player.length; i++) {
                    console.log('player[i]audio', player[i])
                    player[i].pauseVideo();
                }
                for (var i = 0; i < vimeoPlayer.length; i++) {
                    vimeoPlayer[i].pause()
                }
                // checkAllslidesVisited(event)
                // player[0].pauseVideo();
                //$('audio:not(.active)').prop("currentTime",0) // NEW: resets audio
            }
            // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
            //remove the active class from the next navigation link
            else {
                $('.slide[data-slide="' + (dataslide0 - 1) + '"]')
                    .addClass('slectedDiv')
                    .next()
                    .removeClass('slectedDiv');
                // $('section[id="' + dataslide1C + '"] audio')
                //     .trigger('pause')
                //     .removeClass('active')
                //     .animate(
                //         {
                //             volume: 1
                //         },
                //         1000
                //     );
                $('section[id="' + dataslide2P + '"] audio').addClass('active');
                if (pausedNot === true && !$('.game-based-temp').hasClass('active')) {
                    $('section[id="' + dataslide2P + '"] audio.active').trigger('play');
                }
                $('section[id="' + dataslide2P + '"] audio.active').animate({
                        volume: 1
                    },
                    1000
                );

                //$('audio:not(.active)').prop("currentTime",0) // NEW: resets audio
                for (var i = 0; i < player.length; i++) {
                    console.log('player[i]audio', player[i])
                    player[i].pauseVideo();
                }
                for (var i = 0; i < vimeoPlayer.length; i++) {
                    vimeoPlayer[i].pause()
                }
            }

            if ($('.main-sec').hasClass('slectedDiv')) {
                $('.bg1').css({ 'position': 'fixed' }, 'slow');
            } else {
                $('.bg1').css({ 'position': 'absolute' }, 'slow');
            }
            //below turns sound down when not activated
            $('audio:not(.active)').animate({
                    volume: 0
                },
                0,
                function() {
                    $('audio:not(.active)')
                        .get(0)
                        .pause();
                }
            );
        })
});