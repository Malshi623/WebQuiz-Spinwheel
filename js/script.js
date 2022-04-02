$(window).on('resize', function() {
    //   if ($(window).width() < 900) {
    //     $(".li-listing").mCustomScrollbar('destroy');
    //  }
    if ($(window).width() > 900) {
        $(".question-text .question-text-scroll,.feedback-text-display, .feedback-popup .question-text").mCustomScrollbar('destroy');
        $('.mCSB_container').unwrap();
        $('.mCSB_container').contents().unwrap();
        $('.question-text .question-text-scroll,.feedback-text-display, .feedback-popup .question-text').mCustomScrollbar()
    }
})

jQuery(".speaker-icon.speaker-on").on("click", function() {
    jQuery(this).hide();
    jQuery(".speaker-icon.speaker-off").show();
});

jQuery(".speaker-icon.speaker-off").on("click", function() {
    jQuery(this).hide();
    jQuery(".speaker-icon.speaker-on").show();
});

var selectedAnswerValue = "";
var rightAnswerSubmited = 0;

// if (
//   interactionJSON.interactionData[1].resultScreen.scoreInPercentage === false
// ) {
//   $(".percentage-div").remove();
// }

// if (interactionJSON.interactionData[1].resultScreen.showTimeTaken === false) {
//   $(".time-taken-div").remove();
//   $("#timerValue").remove();
//   $('#timeContainer').remove()
// }

// if (interactionJSON.interactionData[01].resultScreen.restartButton === false) {
//   $(".refresh-btn").remove();
// }

function formatDate(date) {
    var monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex] + " " + day + ", " + year;
}
$(".todays-date").html("");
$(".todays-date").append(formatDate(new Date()));

var selectedAnswerValue = []
    // function labelOptionCLick(e) {
    //   alert()
    //   console.log(e)
    //   e.stopPropagation();
    // }
    // $(".question-text li").click(function(event){
    //   $(this).addClass("active");
    //   var answerValue = $(this).find("input").val()
    //   selectedAnswerValue.push(answerValue);
    //     if(interactionJSON.interactionData[0].slides[optionValueArray].questionData.optionType === 'MCQ'){
    //       $(".question-text li").removeClass("active");
    //     }
    //   $(".btn-green").prop("disabled", false);
    //   console.log("selectedAnswerValue", selectedAnswerValue);
    //   event.stopPropagation();
    //   console.log(event)
    //   return selectedAnswerValue;
    // })

// $('.li-listing li input').click(function(e) {
//     $(this).closest('li').toggleClass('active')
//     e.stopPropagation()
// })

function labelOptionCLick(e, event, optionValueArray) {


    if (interactionJSON.interactionData[0].slides[res - 1].questionData.optionType === 'MCQ') {

        $(".question-text li").removeClass("active");
    }
    $(e).closest("li").toggleClass("active");
    $(".btn-green").prop("disabled", false);

    if (interactionJSON.interactionData[0].slides[res - 1].questionData.optionType === 'MRQ' || interactionJSON.interactionData[0].slides[res - 1].questionData.optionType === 'mrq') {


        if ($(".question-text li").hasClass("active")) {
            $(".btn-green").prop("disabled", false);
        } else {
            $(".btn-green").prop("disabled", true);
        }
    }
    return selectedAnswerValue;
}

function startAssesment() {
    scrollToTop()
        // functionscrollToTop()
        //debugger
    if (typeof Spin_The_Wheel !== 'undefined' && Spin_The_Wheel == true) {
        $('.introduction-sec').hide()
        $('.main_section').show();
        if (interactionJSON.interactionData[0].gameSectionFlag == false) {
            // $(".gamezone").css("display", "none");
            // $(".game-based-temp").css("width", "50%");
            // $(".footer-bottom-div").css("left", "5%")
        }
        $("#spin").click();
        getOptions(0)
        $(".game-based-temp").find(".right-panel").css("background", "transparent");
        if ($(window).width() > 900) {
            var position_round = $(".roulet_round").position();
            var actual_top_target = (position_round.top - $(".targetValue").height()) - 20;
            $(".targetValue").css("top", actual_top_target + "px");
        } else if ($(window).width() > 320 && $(window).width() < 900) {

            if (mobileland == true) {
                var position_round = $(".roulet_round").position();
                var actual_top_target = (position_round.top - $(".targetValue").height()) - 5;
                $(".targetValue").css("top", actual_top_target + "px");
            } else {
                var position_round = $(".roulet_round").position();
                var actual_top_target = (position_round.top - $(".targetValue").height()) - 20;
                $(".targetValue").css("top", actual_top_target + "px");
            }

        }
    } else {
        $('.introduction-sec').hide()
        $('.main_section').show();
        $("#ballonBurst").get(0).play();
        $("#ballonBurst").get(0).pause();
        if (interactionJSON.interactionData[0].gameSectionFlag == false) {
            $(".gamezone").css("display", "none");
            $(".game-based-temp").css("width", "50%");
            $(".footer-bottom-div").css("left", "5%")
        }
    }



    if (interactionJSON.interactionData[0].introductionSlides[0].toggleFlag === true && interactionJSON.interactionData[0].resultScreen.showTimeTaken === true) {
        $('.timerCounter').show()
        $('#timerValue').stopwatch().stopwatch('start');
    }
    $('.introduction-sec').removeClass('slectedDiv')
    $(".introduction-sec audio.active").each(function() {
        this.pause();
    });
    if (interactionJSON.interactionData[0].audioData.acrossAllSlides.checked) {
        if (interactionJSON.interactionData[0].audioData.acrossAllSlides.checked === true && pausedNot === true) {
            $(".interaction-audio audio.active").each(function() {
                this.play();
            });
        } else if ($('.main_section audio').hasClass('active') && pausedNot === true) {
            $(".main_section audio.active").each(function() {
                this.play();
            });
        }
    }

    $(".main_section").addClass('slectedDiv')
        // $('.timerCounter').fadeIn()
    $('.top-tool-elements .question-count').fadeIn()
    $('.top-tool-elements .question-count span').text('1 / ' + interactionJSON.interactionData[0].slides.length)
    if (interactionJSON.interactionData[0].introductionSlides[0].toggleFlag == true) {
        resizeQuestionContent();
    }
    if ($('.speaker-icon').is(":visible")) {
        $('.speaker-icon').focus();
    } else if ($('.question-count').is(":visible")) {
        $('.question-count').attr('tabindex', '2');
        $('.question-count').focus();
    }
    $('.question-count').attr('tabindex', '2');
    $('.question-text').find('h1').attr('tabindex', '3');
    $('.question-text').find('.li-listing li').each(function() {
        $(this).find('input').attr('tabindex', '3');
    });
    $('.widget-card').find('.submit-answer').attr('tabindex', '-1');
    $('.widget-card').find('.hidden-submit-answer').attr('tabindex', '3');
    $('.widget-card').find('.next-answer-hidden').attr('tabindex', '-1')
}

function scrollToTop() {
    window.scrollTo(0, 0);
    $("body .main_section .game-based-temp .question-text").scrollTop(0);
}

function submitAnswer(e, questionNumber) {
    var answerSelected = []
    var selectedValue = $(".question-text li.active")
    if (interactionJSON.interactionData[0].feedbackPanel.feedbackPanelRequired === true) {
        scrollToTop()
    }
    // if ($(window).width() < 900) {
    // $('.text-sec.feeback-content').css('margin-top','35px')
    // }
    for (var i = 0; i < selectedValue.length; i++) {
        var allSelectedValue = $(".question-text li.active input")[i].value
        answerSelected.push(parseInt(allSelectedValue))
    }
    var timerStopValue = $("#timerValue").text();
    $(".time-taken").html("");
    $(".time-taken").append(timerStopValue);
    var totalOptionCount = interactionJSON.interactionData[0].slides.length;
    $(".submit-answer").hide();
    $(".moveto-next-ques").show();
    $(".question-text li").css("pointer-events", "none");
    // $('.container_show').addClass('animated')
    // $('.information-panel').hide("slide", { direction: "left" }, 1000)
    $(".game-based-temp .question-text ul li.active").css('width', '90%')
    var scorePercentage = "";
    $(
        ".result-info h4.score-obtained, .result-info .score-obtained-percentage"
    ).html("");
    if (JSON.stringify(e) === JSON.stringify(answerSelected)) {

        $(".mobile-speedo-meter .happy-mobile-icon").addClass('bounceInRight right').attr('src', './images/Happy.svg').show()
        $(".mobile-speedo-meter .sad-mobile-icon").fadeIn()
        $("li.active").append(
            '<img class="correct-right-icon happy-correct-icon" src="./images/Happy-Icon.svg">'
        );
        if (
            interactionJSON.interactionData[0].feedbackPanel.feedbackPanelRequired ===
            true
        ) {
            if ($(window).width() < 900) {
                $('#timeContainer').css('top', '50px')
            }
            $('.mobile-speedo-meter').slideDown()
            $(".feeback-content.right").delay(800).fadeIn();
            $(".info-content").fadeOut();
            $(".feeback-content.right").addClass("animated");
        }

        rightAnswerSubmited = rightAnswerSubmited + 1;
        if (rightAnswerSubmited == 0) {
            $(".result-info h4.score-obtained").append("0/" + totalOptionCount);
        } else {
            $(".result-info h4.score-obtained").append(
                rightAnswerSubmited + "/" + totalOptionCount
            );
        }
        scorePercentage = (rightAnswerSubmited / totalOptionCount) * 100;
        if (rightAnswerSubmited == 0) {
            $(".result-info h4.score-obtained-percentage").append("0%");
        } else {
            $(".result-info h4.score-obtained-percentage").append(
                scorePercentage.toFixed(2) + "%"
            );
        }
        if (scorePercentage < 40) {
            $(".speedo-dashboard").attr({
                src: "images/wrong-result.svg",
            });
            $(".result-screen").css("background-color", "#ffe8e0");
        } else if (scorePercentage > 40 && scorePercentage < 60) {
            $(".result-screen").css("background-color", "#f4e7c2");
        } else if (scorePercentage > 60) {
            $(".speedo-dashboard").attr({
                src: "images/correct-result.svg",
            });
            $(".result-screen").css("background-color", "#dff8ee");
        }
        $('.speedo-dashboard').attr('src', 'images/wrong-result.svg')
    } else {
        $(".mobile-speedo-meter .sad-mobile-icon").addClass('fadeInLeft wrong').attr('src', './images/Sad.svg').show()
        $(".mobile-speedo-meter .happy-mobile-icon").fadeIn()
        scorePercentage = (rightAnswerSubmited / totalOptionCount) * 100;
        if (rightAnswerSubmited == 0) {
            $(".result-info h4.score-obtained").append("0/" + totalOptionCount);
        } else {
            $(".result-info h4.score-obtained").append(
                rightAnswerSubmited + "/" + totalOptionCount
            );
        }
        if (rightAnswerSubmited == 0) {
            $(".result-info h4.score-obtained-percentage").append("0%");
        } else {
            $(".result-info h4.score-obtained-percentage").append(
                scorePercentage.toFixed(2) + "%"
            );
        }
        if (scorePercentage < 40) {
            $(".speedo-dashboard").attr({
                src: "images/wrong-result.svg",
            });
            $(".result-screen").css("background-color", "#ffe8e0");
        } else if (scorePercentage > 40 && scorePercentage < 60) {
            $(".result-screen").css("background-color", "#f4e7c2");
        } else if (scorePercentage > 60) {
            $(".speedo-dashboard").attr({
                src: "images/correct-result.svg",
            });
            $(".result-screen").css("background-color", "#dff8ee");
        }
        $(".question-text li.active").css({
            background: "rgba(244, 67, 54, 0.18)",
            "border-color": "#F44336"
        });
        $("li.active").append(
            '<img class="correct-right-icon happy-correct-icon" src="./images/Sad-icon.png">'
        );
        if (
            interactionJSON.interactionData[0].feedbackPanel.feedbackPanelRequired ===
            true
        ) {
            $('#timeContainer').css('top', '50px')
            $('.mobile-speedo-meter').slideDown()
            $(".feeback-content.wrong").show();
            $(".info-content").fadeOut();
            $(".feeback-content.wrong").addClass("animated");
        }
    }
}

// if (
//   interactionJSON.interactionData[1].audioData.acrossAllSlides.mode === "auto"
// ) {
//   var pausedNot = true;
// } else {
//   var pausedNot = false;
// }

// function audioPause() {
//   $("audio").each(function() {
//     this.pause(); // Stop playing
//     pausedNot = false;
//   });
//   console.log(pausedNot + "pause");
// }

// function audioPlay() {
//   $("audio").each(function() {
//     this.play();
//     pausedNot = true;
//   });
//   console.log(pausedNot + "play");
// }

$(".speaker-icon.speaker-on").on("click", function() {
    $(this).hide();
    $(".speaker-icon.speaker-off").show();
});

$(".speaker-icon.speaker-off").on("click", function() {
    $(this).hide();
    $(".speaker-icon.speaker-on").show();
});

function refreshPageByKey(event) {
    if (event.keyCode === 13 || event.keyCode === 32) {
        refreshPage();
    }
}

function refreshPage() {
    location.reload();
}

function closeGamePopup() {
    if ($('.game-based-temp').hasClass('feedback-panel')) {
        $('.result-screen').fadeIn()
        optionValueArray = 0
    } else {
        $('.game-based-temp,#timeContainer').fadeOut()
        $('html,body').css('overflow-y', 'auto');
        optionValueArray = 0
    }
    // if (interactionJSON.introductionScene === true) {
    $('#charecterImage.bg1').fadeIn();
    // }
    if (interactionJSON.closureScene === true) {
        $('.closure-sec').fadeIn();
    }
}

// Video Play Pause Settings
// function videoPausePlay(e) {
//   // $(".li-listing").mCustomScrollbar();
//   if (interactionJSON.interactionData[0].slides[0].isExternalVideo === false) {
//     var vid = document.getElementById("video");
//     vid.onplaying = function () {
//       $("#mute").addClass("muted");
//       $("audio").each(function () {
//         this.pause();
//       });
//     };
//     vid.onpause = function () {
//       if ($("#mute").hasClass("muted")) {
//         if ($("audio").length > 0) {
//           $("audio").each(function () {
//             this.play();
//           });
//         }
//         $("#mute").removeClass("muted");
//       }
//     };
//   }
// }

// var player = [];
// var videoYt = $("iframe.existing-iframe-example.youtube");
// function onYouTubeIframeAPIReady() {
//   for (var i = 0; i < videoYt.length; i++) {
//     player.push(
//       new YT.Player($(videoYt[i]).attr("id"), {
//         events: {
//           onStateChange: onPlayerStateChange
//         }
//       })
//     );
//   }
// }

// // Youtube Video Setting
// function changeBorderColor(playerStatus) {
//   if (playerStatus == -1) {
//     // unstarted = gray
//   } else if (playerStatus == 0) {
//     // ended = yellow
//   } else if (playerStatus == 1) {
//     alert("hi");
//     $("audio").each(function () {
//       this.pause();
//     });
//     for (var i = 0; i < vimeoPlayer.length; i++) {
//       vimeoPlayer[i].pause();
//     }
//     // playing = green
//   } else if (playerStatus == 2) {
//     if (pausedNot === true) {
//       $("audio").each(function () {
//         this.play();
//       });
//     }
//     // paused = red
//   } else if (playerStatus == 3) {
//     $("audio").each(function () {
//       this.pause();
//     });
//     for (var i = 0; i < vimeoPlayer.length; i++) {
//       vimeoPlayer[i].pause();
//     }
//     // buffering = purple
//   } else if (playerStatus == 5) {
//     // video cued = orange
//   }
// }

// function onPlayerStateChange(event) {
//   changeBorderColor(event.data);
// }