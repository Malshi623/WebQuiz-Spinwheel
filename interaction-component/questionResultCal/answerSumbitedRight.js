function rightAnswerSelected(answerSelected, selectedValue, modeFlag) {
    //console.log(answerSelected + ">>>>>" + selectedValue + ">>>>>>>>>" + modeFlag)
    //debugger;
    if (interactionJSON.interactionData[0].interactionNameText == "Open Book Challenge") {
        $(".feedback-text-display").css("background", "#cef3e4");
        $(".feedback-text-display").css("color", interactionJSON.interactionData[0].time_interval_font.correctFontTextColor);
    }
    if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {
        $(".feedback-text-display").css("background", "#DCFFD6");
        $(".feedback-text-display").css("color", interactionJSON.interactionData[0].time_interval_font.correctFontTextColor);
    }
    if (typeof Spin_The_Wheel !== 'undefined' && Spin_The_Wheel == true) {
        target_sum.push(interactionJSON.interactionData[0].slides[res - 1].questionPoints)
        sum = target_sum.reduce(function(a, b) {
            return a + b;
        }, 0);
        $("#ballonBonus")
            .get(0)
            .play();
        $(".targetValue").html(sum + " / " + interactionJSON.interactionData[0].resultScreen.passingPercent)

    } else if (typeof Spin_The_Wheel_new !== 'undefined' && Spin_The_Wheel_new == true) {
        $("#ballonBonus")
            .get(0)
            .play();
        rightanswer = true;
        if ($(window).width() > 900) {
            checkanswer();
        }
        if (levelPass == true || levelPass == "true") {
            if (interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent) {
                $('.resultheadertext').html("")
                $('.resultheadertext').append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.correct.textContent)
            }
        } else {
            if (interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent) {
                $('.resultheadertext').html("")
                $('.resultheadertext').append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent)
            }
        }
    } else if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {
        $("#ballonBonus")
            .get(0)
            .play();
    } else {
        var bonuspointArr = $.inArray(questionName, descName);
        if (bonuspointArr == -1 || bonuspointArr == "-1") {
            $("#ballonBonus")
                .get(0)
                .play();
            bonus = bonus + 5;
            $(".bonusPoint").html(bonus);
            $(".ques_head_bonus_img").show();
            $(".ques_head_img_red").hide();
            $(".ques_head_img_green").show();
            $(".ques_head_bonus").find(".ques_head_img_span").html(" + 5 Bonus Points ");
            $(".ques_head_bonus_img").animate({ 'right': '0' }, "slow");
        }
    }

    if (interactionJSON.interactionData[0].interactionNameText == "Open Book Challenge") {
        let questionPoint = interactionJSON.interactionData[0].slides[optionValueArray].questionPoints;
        questionPointTotal = questionPointTotal + questionPoint;
        pointCalc(questionPointTotal)
    }


    if (!modeFlag && $(window).width() > 900) {
        answerSumbitedRight = true;
        if (interactionJSON.interactionData[0].gameSectionFlag == true) {
            if (typeof Spin_The_Wheel !== 'undefined' && Spin_The_Wheel == true || typeof Spin_The_Wheel_new !== 'undefined' && Spin_The_Wheel_new == true || typeof super_gold_game !== 'undefined' && super_gold_game == true) {

            } else {
                gameStart()
            }

        } else {

        }
    }
    //gameStart()	

    selectedValue.addClass('active right')
    $('.li-listing').css({ 'width': '90%' }, 'slow')
    selectedValue.find('img').show().attr('src', './images/correct.png')
    rightAnswerSubmited = rightAnswerSubmited + 1;
    $('.disabledpointer').css('pointer-events', 'auto')
    $('.gamezone .game-alert').css({
        'border': '1px solid rgb(14,180,88)',
        'background': 'rgb(14,180,88)',
        'background': '-moz-radial-gradient(center, ellipse cover, rgba(14,180,88,1) 0%, rgba(0,128,46,1) 100%)',
        'background': '-webkit-radial-gradient(center, ellipse cover, rgba(14,180,88,1) 0%,rgba(0,128,46,1) 100%)',
        'background': ' radial-gradient(ellipse at center, rgba(14,180,88,1) 0%,rgba(0,128,46,1) 100%)',
        'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#0eb458", endColorstr="#00802e",GradientType=1 )'
    })
    $('.gamezone .game-alert').text(interactionJSON.textConstant.Slides.SUCCESS_MESSAGE)
        //check feedback true false	
    if (interactionJSON.interactionData[0].feedbackScreen.feedbackScreenType == "true") {

        $('.feedback-text-display').css({
            "font-family": interactionJSON.interactionData[0].time_interval_font.correctFontFamily,
            "color": interactionJSON.interactionData[0].time_interval_font.correctFontTextColor,
            "font-size": interactionJSON.interactionData[0].time_interval_font.correctFontSize + 'px'
        });
    }
    if (interactionJSON.interactionData[0].gameSectionFlag == true) {
        if (interactionJSON.interactionData[0].feedbackScreen.feedbackScreenType == "true") {
            if (interactionJSON.interactionData[0].slides[res - 1].feedbackPanel.correct.textContent) {
                $('.feedback-text-display').append(
                    interactionJSON.interactionData[0].slides[res - 1].feedbackPanel.correct.textContent
                )
            } else {
                $('.feedback-text-display').hide()
            }
        } else {
            $('.feedback-text-display').hide()
        }
    }
    //optionValueArray
    else {
        if (interactionJSON.interactionData[0].slides[optionValueArray].feedbackPanel.correct.textContent) {
            $('.feedback-text-display').append(
                interactionJSON.interactionData[0].slides[optionValueArray].feedbackPanel.correct.textContent
            )
        } else {
            $('.feedback-text-display').hide()
        }

    }




    $(".hidden-submit-answer").attr('disabled', true)
    $(".submit-answer").attr('disabled', true)
    disabledKnife = true
    userAnswer = true;
    if ($(window).width() > 900) {
        $('.game-alert').fadeIn();
    }
    try {
        getCorrectAns(answerSelected, optionValueArray)
    } catch (err) {

    }

    //setTimeout(function(){ alert("nextAnswer"); }, 13000);
    if (interactionJSON.interactionData[0].gameSectionFlag == true) {
        if (typeof Spin_The_Wheel !== 'undefined' && Spin_The_Wheel == true) {
            // setTimeout(function() { nextAnswer(); }, 3500);
        } else if (typeof Spin_The_Wheel_new !== 'undefined' && Spin_The_Wheel_new == true) {

        } else if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {
            //nextAnswer();
            //info_Close();
        } else {
            setTimeout(function() { playGameBtn(); }, 3500);
            setTimeout(function() { nextAnswer(); }, 3500);
            setTimeout(function() { bonusPointPos(); }, 3500);
            setTimeout(function() { $(".ques_head_bonus_img").hide(); }, 3500);
        }

    } else if (interactionJSON.interactionData[0].infoSectionFlag == true) {
        //setTimeout(function() { nextAnswer(); }, 3500);
        // setTimeout(function() { checkInfoSection(); }, 3500);
    } else {
        setTimeout(function() { nextAnswer(); }, 3500);
    }
    //nextAnswer()
}