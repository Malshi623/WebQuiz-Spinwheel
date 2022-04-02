// button click function call send 2 parameter ( seleted answer number , flag false )
function submitAnswerInstant(e, modeFlag) {

    // pause all intruction page releted audio  
    $('.checkpoint-audio').each(function() {
        this.play()
        this.pause()
    })
    $('.cheering-audio').each(function() {
        this.play();
        this.pause();
    })

    //below answerSelected use all selected question add this array
    var answerSelected = []
    var selectedValue = $(".question-text li.active")
    $('.li-listing li').css('pointer-events', 'none')
    for (var i = 0; i < selectedValue.length; i++) {
        var allSelectedValue = $(".question-text li.active input")[i].value
        answerSelected.push(parseInt(allSelectedValue))
    }
    // allAnswerSelectes array push all user selected option or answer
    allAnswerSelected.push(answerSelected)

    if (interactionJSON.interactionData[0].interactionNameText == "Open Book Challenge") {
        res = optionValueArray + 1;
    }
    if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {
        res = optionValueArray + 1;
    }

    if (interactionJSON.interactionData[0].slides[res - 1].questionData.optionType === 'MCQ') {
        if (e[0] === answerSelected[0]) {
            rightAnswerSelected(answerSelected, selectedValue, modeFlag)

            try {
                checkAllQuestionsVisited(res - 1, true, interactionJSON.interactionData[0].interactionNameText)
            } catch (err) {
                // console.log(err.message)
            }



        } else {
            wrongAnswerSelected(answerSelected, selectedValue, modeFlag)
            try {
                checkAllQuestionsVisited(res - 1, false, interactionJSON.interactionData[0].interactionNameText)
            } catch (err) {
                // console.log(err.message)
            }
        }
    } else {

        if (valueIsEqual(e, answerSelected)) {
            rightAnswerSelected(answerSelected, selectedValue, modeFlag)
            try {
                checkAllQuestionsVisited(res - 1, true, interactionJSON.interactionData[0].interactionNameText)
            } catch (err) {
                //console.log(err.message)
            }
        } else {
            wrongAnswerSelected(answerSelected, selectedValue, modeFlag)
            try {
                checkAllQuestionsVisited(res - 1, false, interactionJSON.interactionData[0].interactionNameText)
            } catch (err) {
                //console.log(err.message)
            }
        }
    }

    //check device if ipad or mobile then after question submitted game section on full screen
    if ($(window).width() > 900) {
        setTimeout(function() {
            $('.game-alert').fadeOut();
        }, 2000);
    }

    answerValueArray = answerValueArray + 1;
    if ($(window).width() > 900) {
        $(".submit-answer").attr({
            'onclick': 'nextAnswer()',
        });
        $(".hidden-submit-answer").attr({
            'onclick': 'nextAnswer()',
        });

        if (JSON.stringify(e) === JSON.stringify(answerSelected)) {

            if (typeof Spin_The_Wheel !== 'undefined' && Spin_The_Wheel == true) {
                $(".submit-answer").text(interactionJSON.textConstant.Slides.NEXT);
                $(".submit-answer").attr('disabled', false);
                $(".hidden-submit-answer").attr('disabled', false);
            } else if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {
                //$(e.currentTarget).css("pointer-events", "auto");

                $(".submit-answer").attr({
                    'onclick': 'playGamefun()',
                });
                $(".hidden-submit-answer").attr({
                    'onclick': 'playGamefun()',
                });
                $(".submit-answer").text(interactionJSON.textConstant.Slides.PLAY);
                $(".submit-answer").attr('disabled', false);
                $(".hidden-submit-answer").attr('disabled', false);
                $(".submit-answer").addClass('playGamefun').removeClass('submit-answer')
                $(".hidden-submit-answer").addClass('playGamefun').removeClass('submit-answer');
                $(".playGamefun").css("pointer-events", "none");
                setTimeout(function() { $(".playGamefun").css("pointer-events", "auto"); }, 2000);
            } else {
                $(".submit-answer").text(interactionJSON.textConstant.Slides.SUBMIT);
                $(".submit-answer").attr('disabled', true);
                $(".hidden-submit-answer").attr('disabled', true);
            }


            // $(".hidden-submit-answer").text('skip the game');
        } else {
            if (typeof Spin_The_Wheel !== 'undefined' && Spin_The_Wheel == true || typeof Spin_The_Wheel_new !== 'undefined' && Spin_The_Wheel_new == true) {
                $(".submit-answer").text(interactionJSON.textConstant.Slides.NEXT);
                $(".submit-answer").attr('disabled', false);
                $(".hidden-submit-answer").attr('disabled', false);
            } else if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {

                $(".submit-answer").attr({
                    'onclick': 'playGamefun()',
                });
                $(".hidden-submit-answer").attr({
                    'onclick': 'playGamefun()',
                });
                $(".submit-answer").text(interactionJSON.textConstant.Slides.PLAY);
                $(".submit-answer").attr('disabled', false);
                $(".hidden-submit-answer").attr('disabled', false);
                $(".submit-answer").addClass('playGamefun').removeClass('submit-answer')
                $(".hidden-submit-answer").addClass('playGamefun').removeClass('submit-answer');
                $(".playGamefun").css("pointer-events", "none");
                setTimeout(function() { $(".playGamefun").css("pointer-events", "auto"); }, 2000);
            } else {
                $(".submit-answer").text(interactionJSON.textConstant.Slides.SUBMIT);
                $(".submit-answer").attr('disabled', true);
                $(".hidden-submit-answer").attr('disabled', true);
            }

            // $(".submit-answer").attr({
            //   'onclick': 'nextAnswer()',
            // });
        }

        // if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {
        //     $(".submit-answer").text(interactionJSON.textConstant.Slides.NEXT);
        //     $(".submit-answer").attr('disabled', false);
        //     $(".hidden-submit-answer").attr('disabled', false);
        // } else {
        //     $(".submit-answer").text(interactionJSON.textConstant.Slides.SUBMIT);
        //     $(".submit-answer").attr('disabled', true);
        //     $(".hidden-submit-answer").attr('disabled', true);
        // }

        $(".submit-answer").addClass('moveto-next-ques').removeClass('submit-answer')
        $(".hidden-submit-answer").addClass('moveto-next-ques').removeClass('submit-answer')
            //setTimeout(function(){ playGameBtn(); }, 3000);
            //playGameBtn();

    } else {

        $(".submit-answer").attr('disabled', true);
        if (interactionJSON.interactionData[0].interactionNameText == "Open Book Challenge") {
            $(".submit-answer").addClass('moveto-next-ques').removeClass('submit-answer')
            $(".hidden-submit-answer").addClass('moveto-next-ques').removeClass('submit-answer')

        }
        if (typeof Spin_The_Wheel_new !== 'undefined' && Spin_The_Wheel_new == true) {
            if (JSON.stringify(e) === JSON.stringify(answerSelected)) {
                $(".submit-answer").attr({
                    'onclick': 'playGamefun()',
                });
                $(".hidden-submit-answer").attr({
                    'onclick': 'playGamefun()',
                });
                $(".submit-answer").text(interactionJSON.textConstant.Slides.PLAY);
                $(".submit-answer").attr('disabled', false);
                $(".hidden-submit-answer").attr('disabled', false);
                $(".submit-answer").addClass('playGamefun').removeClass('submit-answer')
                $(".hidden-submit-answer").addClass('playGamefun').removeClass('submit-answer')

            } else {

                $(".submit-answer").attr({
                    'onclick': 'nextAnswer()',
                });
                $(".hidden-submit-answer").attr({
                    'onclick': 'nextAnswer()',
                });
                $(".submit-answer").text(interactionJSON.textConstant.Slides.NEXT);
                $(".submit-answer").attr('disabled', false);
                $(".hidden-submit-answer").attr('disabled', false);
                $(".submit-answer").addClass('moveto-next-ques').removeClass('submit-answer')
                $(".hidden-submit-answer").addClass('moveto-next-ques').removeClass('submit-answer')
            }
        }
        if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {

            $(".submit-answer").attr({
                'onclick': 'playGamefun()',
            });
            $(".hidden-submit-answer").attr({
                'onclick': 'playGamefun()',
            });
            $(".submit-answer").text(interactionJSON.textConstant.Slides.PLAY);
            $(".submit-answer").attr('disabled', false);
            $(".hidden-submit-answer").attr('disabled', false);
            $(".submit-answer").addClass('playGamefun').removeClass('submit-answer')
            $(".hidden-submit-answer").addClass('playGamefun').removeClass('submit-answer')
            $(".playGamefun").css("pointer-events", "none");
            setTimeout(function() { $(".playGamefun").css("pointer-events", "auto"); }, 2000);

        }


    }

    if (typeof Spin_The_Wheel_new !== 'undefined' && Spin_The_Wheel_new == true) {
        $('.score-obtained').html("");
        $('.score-obtained').append(rightAnswerSubmited + '/' + totalCount)
    }

    if (typeof Spin_The_Wheel !== 'undefined' && Spin_The_Wheel == true) {
        $(".submit-answer").text(interactionJSON.textConstant.Slides.NEXT);
        $(".submit-answer").attr({
            'onclick': 'nextAnswer()',
        });
        $(".submit-answer").attr('disabled', false);
        $(".submit-answer").addClass('play-game-btn').removeClass('submit-answer')
        $(".submit-answer").removeAttr("onclick");
    }

    if (interactionJSON.interactionData[0].interactionNameText == "Open Book Challenge") {
        $(".submit-answer").attr('disabled', false);
        $(".moveto-next-ques").text(interactionJSON.textConstant.Slides.NEXT);

        $(".moveto-next-ques").attr({
            'onclick': 'nextAnswer()',
        });
        $(".moveto-next-ques").attr('disabled', false);

    }



    // $(".feedback-text-display").slideUp();
    $(".feedback-text-display").addClass('is-open')
    if ($(window).width() > 900) {
        var footerBottomHeight = $('.footer-bottom-div').outerHeight();
        $(".feedback-text-display").css({
            'bottom': footerBottomHeight + 'px'
                // 'top': '-6px'
        });

    } else {
        var footerBottomHeight = $('.footer-bottom-div').outerHeight();

        $(".feedback-text-display").css({
            'bottom': footerBottomHeight + 'px'
                // 'top': '-6px'
        });
    }
    setTimeout(function() {
        $(".feedback-text-display").mCustomScrollbar({
            theme: "light"
        }, 1000);

    });
    setTimeout(function() {
        $('.widget-card').find('.total-question-list').attr('tabindex', '-1');
        $('.widget-card').find('.question-count').attr('tabindex', '-1');

        $('.widget-card').find('.question-text h1').attr('tabindex', '-1');
        $('.widget-card').find('.li-listing li').each(function() {
            //$(this).attr('tabindex','-1');
            $(this).find('input').attr('tabindex', '-1');
        });
        $('.question-text').find('.moveto-next-ques').attr('tabindex', '-1')
        $(".hidden-submit-answer").prop("disabled", false);
        $(".hidden-submit-answer").attr('tabindex', '4');
        $(".hidden-submit-answer").focus();
        if ($(".feedback-text-display").hasClass('is-open')) {
            $('.question-text .feedback-text-display').attr('tabindex', '4')
            $('.feedback-text-display').focus();
        }
        $('.widget-card').find('.hidden-submit-answer').attr('tabindex', '5')
    }, 500)
    if (interactionJSON.interactionData[0].audioData.acrossAllSlides.checked) {
        if (interactionJSON.interactionData[0].audioData.acrossAllSlides.checked === true) {
            $('.interaction-audio audio.active').each(function() {
                this.pause()
            })
        } else {
            $('.game-based-temp audio.active').each(function() {
                this.pause()
            })
        }
    }
    //debugger;
    //nextAnswer()

}