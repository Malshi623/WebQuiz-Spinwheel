function nextAnswer(e) {
    if (typeof Spin_The_Wheel !== 'undefined' && Spin_The_Wheel == true) {
        $(".game-based-temp").css("pointer-events", "none");
        $(".gamezone").css("pointer-events", "auto");
        $(".mainDiv").css("transform", "rotate(0deg)");
        //transition: 0.2s ease forward;
        $(".mainDiv").css("transition", "0.2s ease forward")
        $(".game-based-temp").css("background", "#00000065");
        $(".game-based-temp").css("opacity", "0.5");
        $(".num-" + res).css("background", "#000");
        $(".num-" + res).addClass("numblack");
        $(".feedback-text-display").css("position", "absolute");
        if ($(window).width() > 900) {
            $("#spin").click();
        } else {
            $(".game-based-temp").css("width", "0");
            $(".gamezone").css("width", "100%");
            $("#spin").click();

        }

        if ((optionValueArray + 1) < totalCount) {

            if (sum >= interactionJSON.interactionData[0].resultScreen.passingPercent) {
                if (interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent) {
                    $(".resultheadertext").append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent)
                }

                $(".clscongra").css("display", "block");
                $(".gamezone").css("pointer-events", "none");
                setTimeout(function() {
                    $(".endGame").click();
                    $(".clscongra").css("display", "none")
                }, 3000);
            }
        }

    }

    // $('.gamearea canvas').remove()
    $('.game-alert').hide();
    userAnswer = false;
    disabledKnife = false
        // restartgame()
        // loadKnifeGame()
    var answerSelected = []
    var selectedValue = $(".question-text li.active")

    if (optionValueArray >= totalCount) {

        // if (typeof Spin_The_Wheel_new !== 'undefined' && Spin_The_Wheel_new == true) {

        // } else {
        $(".top-tool-elements").css("opacity", "0");
        if (interactionJSON.interactionData[0].resultScreen.resultScreenRequired === true) {

            if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {

                currentquestiono = optionValueArray;
                // gamepausedemo()
                // $(".main_section").html("");
                // $(".main_section").css("background", "url('./images/end-image.png')")
                // $(".main_section").css("background-size", "100% 100%");
                // $(".top-tool-elements").css("border", "none");
                // setTimeout(function() { $('.result-screen').fadeIn(); }, 4000);
            } else {
                $('.result-screen').fadeIn();
            }

        }
        $('.game-based-temp').removeClass('active');
        $('.game-based-temp, .gamezone, #timeContainer,.top-tool-elements .question-count').fadeOut();
        $(".game-based-temp audio").each(function() {
            this.pause();
        });
        if (interactionJSON.interactionData[0].audioData.passResult.src || interactionJSON.interactionData[0].audioData.failResult.src) {
            if (pausedNot === true && (interactionJSON.interactionData[0].audioData.passResult.src || interactionJSON.interactionData[0].audioData.failResult.src) && interactionJSON.interactionData[0].audioData.acrossAllSlides.checked === false) {
                $(".result-screen .result-audio").each(function() {
                    this.play();
                });
            }
        }
        optionValueArray = 0
            //}
    }
    if (JSON.stringify(e) === JSON.stringify(answerSelected)) {
        rightAnswerSubmited = rightAnswerSubmited + 1;
        $("#gamearea").removeClass("disabledpointer");
    }

    percentageScore = (rightAnswerSubmited / totalCount) * 100;
    var timerStopValue = $("#timerValue").text();
    $('.score-obtained, .bonus-obtained, .score-obtained-percentage, .time-taken').html('')
    $('.time-taken').append(timerStopValue)
    if (interactionJSON.interactionData[0].interactionNameText == "Open Book Challenge") {
        let currentTime = $("#targettimeVal").text();
        // $('.time-taken').html(currentTime + " / " + interactionJSON.interactionData[0].setTimer.HH + ":" + interactionJSON.interactionData[0].setTimer.MM + ":" + interactionJSON.interactionData[0].setTimer.SS);
        $('.time-taken').html(currentTime + " / " + ("0" + interactionJSON.interactionData[0].setTimer.HH).slice(-2) + ":" + ("0" + interactionJSON.interactionData[0].setTimer.MM).slice(-2) + ":" + ("0" + interactionJSON.interactionData[0].setTimer.SS).slice(-2));
    } else if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {

        let currentTime = $("#targettimeVal").text();
        $('.time-taken').html(currentTime + " / " + ("0" + interactionJSON.interactionData[0].setTimer.HH).slice(-2) + ":" + ("0" + interactionJSON.interactionData[0].setTimer.MM).slice(-2) + ":" + ("0" + interactionJSON.interactionData[0].setTimer.SS).slice(-2));
    } else {
        $('.time-taken').html("");
        $('.time-taken').append(timerStopValue)
    }
    if (interactionJSON.interactionData[0].interactionNameText == "Open Book Challenge") {
        $('.score-obtained').append(questionPointTotal)
    } else {
        $('.score-obtained').append(rightAnswerSubmited + '/' + totalCount)
    }
    $('.bonus-obtained').append(bonusPoints)
        //levelResult
    if (typeof Spin_The_Wheel !== 'undefined' && Spin_The_Wheel == true) {
        $('.score-obtained-percentage').append(sum + " / " + interactionJSON.interactionData[0].resultScreen.passingPercent)
    } else if (interactionJSON.interactionData[0].interactionNameText == "Open Book Challenge" || typeof Spin_The_Wheel_new !== 'undefined' && Spin_The_Wheel_new == true) {
        $(".percentage-div p").html("");
        $(".percentage-div p").html("Level");
        $('.score-obtained-percentage').append(levelResult);
    } else {
        $('.score-obtained-percentage').append(percentageScore.toFixed(0) + '%')
    }





    if (interactionJSON.interactionData[0].audioData.passResult.src) {
        if (percentageScore >= interactionJSON.interactionData[0].resultScreen.passingPercent) {
            // $('.inner-container').css('background-color', '#dff8ee')
            $('.speedo-meter-result').html('')
            $('.speedo-meter-result').append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent)
            if (interactionJSON.interactionData[0].audioData.passResult.src) {
                $('.result-screen .result-audio').remove()
                $('.result-screen').append(`
            <audio class="result-audio active">
              <source src="${interactionJSON.interactionData[0].audioData.passResult.src}" type="audio/mp3"></source>  
            </audio>
          `)
            }

        } else {
            // $('.inner-container').css('background-color', '#FFEFEF')
            $('.speedo-meter-result').html('')
            $('.speedo-meter-result').append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent)

            if (interactionJSON.interactionData[0].audioData.failResult.src) {
                if (interactionJSON.interactionData[0].audioData.failResult.src) {
                    $('.result-screen .result-audio').remove()
                    $('.result-screen').append(`
            <audio class="result-audio active">
              <source src="${interactionJSON.interactionData[0].audioData.failResult.src}" type="audio/mp3"></source>  
            </audio>
          `)
                }
            }
        }
    }
    optionValueArray = optionValueArray + 1
    if (optionValueArray < totalCount) {
        answerSumbitedRight = false;
        if (typeof Spin_The_Wheel !== 'undefined' && Spin_The_Wheel == true) {} else {
            getOptions(optionValueArray);
        }

        if (interactionJSON.interactionData[0].interactionNameText == "Open Book Challenge") {
            checkInfoSection();
            finallevel();
            //pointCalc(questionPointTotal)
        }
        if (interactionJSON.interactionData[0].audioData.acrossAllSlides.checked) {
            if (interactionJSON.interactionData[0].audioData.acrossAllSlides.checked === true && pausedNot === true) {
                $(".interaction-audio audio.active").each(function() {
                    this.play();
                });
            } else {
                $(".game-based-temp audio.active").each(function() {
                    this.play();
                });
            }
        }
        // $(".btn-green").prop("disabled", true);
        if ($('.speaker-icon').is(":visible")) {
            $('.speaker-icon').focus();
        } else if ($('.question-count').is(":visible")) {
            $('.question-count').attr('tabindex', '2');
            $('.question-count').focus();
        }
        $('.question-count').attr('tabindex', '2');
        $('.question-text').find('h1').attr('tabindex', '3')
        $('.question-text').find('.li-listing li').each(function() {
            $(this).find('input').attr('tabindex', '3');
        });
        $('.widget-card').find('.submit-answer').attr('tabindex', '-1');
        $('.widget-card').find('.hidden-submit-answer').attr('tabindex', '3');
        $('.widget-card').find('.next-answer-hidden').attr('tabindex', '-1')
        if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {
            $('.top-tool-elements .question-count span').text((optionValueArray) + ' / ' + totalCount)
        } else {
            $('.top-tool-elements .question-count span').text((optionValueArray + 1) + ' / ' + totalCount)
        }

    } else {

        if (interactionJSON.interactionData[0].resultScreen.resultScreenRequired === true) {

            if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {
                currentquestiono = optionValueArray;
                gamepausedemo();
                $(".main_section").html("");
                if (percentageScore >= 0) {
                    if (percentageScore >= interactionJSON.interactionData[0].resultScreen.passingPercent) {

                        $("#gameWin")
                            .get(0)
                            .play();
                        $(".main_section").css("background", "url('./images/Goldio_Ani_Win_01.gif')")
                        $(".main_section").css("background-size", "100% 100%");


                    } else {
                        $("#gameLose")
                            .get(0)
                            .play();
                        $(".main_section").css("background", "url('./images/Goldio_Ani_Lose_01.gif')")
                        $(".main_section").css("background-size", "100% 100%");


                    }

                } else {
                    $('.result-screen').fadeIn();
                }
                $(".top-tool-elements").css("border", "none");
                setTimeout(function() {
                    $('.result-screen').fadeIn();
                    $('.cheering-audio').each(function() {
                        this.play()
                        this.pause()
                    })
                }, 6000);
            } else {
                $('.result-screen').fadeIn();
            }

            //$('.result-screen').fadeIn();
            $('.result-screen').addClass('active')
            $('.game-based-temp').removeClass('active');
            $('.game-based-temp, .gamezone, #timeContainer,.top-tool-elements .question-count,.top-tool-elements .lifeline, .top-tool-elements .scoreContainer').fadeOut();
            $(".game-based-temp audio").each(function() {
                this.pause();
            });
            $("video").each(function() {
                $(this).get(0).pause();
            });
            // }

            if (interactionJSON.interactionData[0].interactionNameText == "Open Book Challenge") {
                $('#iframeid').attr('src', $('#iframeid').attr('src'));
            }
            if (typeof Spin_The_Wheel !== 'undefined' && Spin_The_Wheel == true) {
                if (sum >= interactionJSON.interactionData[0].resultScreen.passingPercent) {
                    if (interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent) {
                        $(".resultheadertext").append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent)
                    }
                } else {
                    if (interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent) {
                        $(".resultheadertext").append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent)
                    }
                }
            } else if (interactionJSON.interactionData[0].interactionNameText == "Open Book Challenge") {
                //debugger
                if (levelPass == true || levelPass == "true") {
                    if (interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent) {
                        $(".resultheadertext").html("")
                        $(".resultheadertext").append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent)
                    }
                } else {
                    if (interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent) {
                        $(".resultheadertext").html("")
                        $(".resultheadertext").append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent)
                    }
                }
            } else if (typeof Spin_The_Wheel_new !== 'undefined' && Spin_The_Wheel_new == true) {

                if (levelPass == true || levelPass == "true") {
                    if (interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent) {
                        $(".resultheadertext").html("")
                        $(".resultheadertext").append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent)
                    }
                } else {
                    if (interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent) {
                        $(".resultheadertext").html("")
                        $(".resultheadertext").append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent)
                    }
                }
                $(".btnviewanswer").css("opacity", "1");
                $(".btnviewanswer").css("width", "235px");
            } else if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {
                if (percentageScore >= interactionJSON.interactionData[0].resultScreen.passingPercent) {
                    if (interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent) {

                        $(".resultheadertext").append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent)
                    }
                } else {
                    if (interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent) {

                        $(".resultheadertext").append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent)
                    }
                }
            } else {
                if (percentageScore >= interactionJSON.interactionData[0].resultScreen.passingPercent) {
                    if (interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent) {

                        $(".resultheadertext").append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent)
                    }
                } else {
                    if (interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent) {

                        $(".resultheadertext").append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent)
                    }
                }
            }


        }

        if (interactionJSON.interactionData[0].audioData.acrossAllSlides.checked) {
            if (interactionJSON.interactionData[0].audioData.acrossAllSlides.checked === true && pausedNot === true) {
                $(".interaction-audio audio.active").each(function() {
                    this.play();
                });
            } else if (pausedNot === true && (interactionJSON.interactionData[0].audioData.passResult.src || interactionJSON.interactionData[0].audioData.failResult.src) && interactionJSON.interactionData[0].audioData.acrossAllSlides.checked === false) {
                $(".result-screen .result-audio").each(function() {
                    this.play();
                });
            }
        }

        if (interactionJSON.interactionData[0].audioData.acrossAllSlides.checked) {
            if (interactionJSON.interactionData[0].audioData.acrossAllSlides.checked === true) {
                $('.sound-on-off').show();
            } else {
                if (interactionJSON.interactionData[0].audioData.passResult.src || interactionJSON.interactionData[0].audioData.failResult.src) {
                    $('.sound-on-off').show();
                } else {
                    $('.sound-on-off').hide();
                }
            }
        }
        optionValueArray = 1

        $('.speedo-meter-result').attr('tabindex', '2')
        $('.speedo-meter-result').find('a').attr('tabindex', '2')
        $('.result-info').attr('tabindex', '2');
        $('.refresh-btn').attr('tabindex', '3');

        if ($('.speaker-icon').is(":visible")) {
            $('.speaker-icon').focus();
        } else if ($('.speedo-meter-result').is(":visible")) {
            $('.speedo-meter-result').focus();
        } else {
            $('.result-info').focus();
        }
        $('.question-count').attr('tabindex', '-1');
        $('.question-text').find('h1').attr('tabindex', '-1')
        $('.question-text').find('.li-listing li').each(function() {
            $(this).find('input').attr('tabindex', '-1');
        });
        $('.widget-card').find('.submit-answer').attr('tabindex', '-1');
        $('.widget-card').find('.hidden-submit-answer').attr('tabindex', '-1');
        $('.widget-card').find('.moveto-next-ques').attr('tabindex', '-1')
        $('.widget-card').find('.next-answer-hidden').attr('tabindex', '-1')
            // }
    }
    $('.disabledpointer').css('pointer-events', 'none')
    $('.game-based-temp').animate({ scrollTop: 0 }, 500);

    // $('.game-based-temp .question-text').css('max-height', 'calc(100vh - 150px)')
    // $(".question-text").mCustomScrollbar('update');
    if (typeof Spin_The_Wheel !== 'undefined' && Spin_The_Wheel == true) {} else {
        resizeQuestionContent()
    }
    // if (typeof Spin_The_Wheel_new !== 'undefined' && Spin_The_Wheel_new == true) {
    //     checkanswer();
    //     res = res + 1;
    // }
    return optionValueArray;

}