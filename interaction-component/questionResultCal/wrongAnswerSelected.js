function wrongAnswerSelected(answerSelected, selectedValue, modeFlag) {

    if (interactionJSON.interactionData[0].interactionNameText == "Open Book Challenge") {
        $(".feedback-text-display").css("background", "#FDDDDB");
        //  $(".feedback-text-display").css("color", "#F44336");
        $(".feedback-text-display").css("color", interactionJSON.interactionData[0].time_interval_font.wrongFontTextColor);
    }
    if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {
        $(".feedback-text-display").css("background", "#FDDDDB");
        $(".feedback-text-display").css("color", interactionJSON.interactionData[0].time_interval_font.wrongFontTextColor);
    }
    if (typeof Spin_The_Wheel !== 'undefined' && Spin_The_Wheel == true) {
        $("#ballonBonusWrong")
            .get(0)
            .play();

    } else if (typeof Spin_The_Wheel_new !== 'undefined' && Spin_The_Wheel_new == true) {
        $("#ballonBonusWrong")
            .get(0)
            .play();
    } else if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {
        $("#ballonBonusWrong")
            .get(0)
            .play();
    } else {
        var bonuspointArr = $.inArray(questionName, descName);
        if (bonuspointArr == -1 || bonuspointArr == "-1") {
            $("#ballonBonusWrong")
                .get(0)
                .play();
            bonus = bonus - 5;
            $(".bonusPoint").html(bonus);
            $(".ques_head_bonus_img").show();
            $(".ques_head_img_green").hide();
            $(".ques_head_img_red").show();
            $(".ques_head_bonus_img").find(".ques_head_img_span").html(" - 5 Bonus Points ");
            $(".ques_head_bonus_img").animate({ 'right': '0' }, "slow");
            $(".ques_head_img_green").addClass("bounce_animation");
        }
    }



    if (!modeFlag && $(window).width() > 900) {
        //answerWrong();
        answerSumbitedRight = false;
        if (interactionJSON.interactionData[0].gameSectionFlag == true) {
            // gameStart()
        } else {

        }
    }


    $('.disabledpointer').css('pointer-events', 'auto')
    $('.gamezone .game-alert').css({
        'border': '1px solid rgb(217,63,26)',
        'background': 'rgb(217,63,26);',
        'background': '-moz-radial-gradient(center, ellipse cover, rgba(217,63,26,1) 0%, rgba(170,34,0,1) 100%)',
        'background': '-webkit-radial-gradient(center, ellipse cover, rgba(217,63,26,1) 0%,rgba(170,34,0,1) 100%)',
        'background': 'radial-gradient(ellipse at center, rgba(217,63,26,1) 0%,rgba(170,34,0,1) 100%)',
        'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#d93f1a", endColorstr="#aa2200",GradientType=1 )'
    })
    $('.gamezone .game-alert').text(interactionJSON.textConstant.Slides.FAILURE_MESSAGE)
    var feedbackHeight = $('.feedback-text-display').height()
    if (interactionJSON.interactionData[0].feedbackScreen.feedbackScreenType == "true") {
        //setTimeout(function () {	
        $('.feedback-text-display').css({
            "font-family": interactionJSON.interactionData[0].time_interval_font.wrongFontFamily,
            "color": interactionJSON.interactionData[0].time_interval_font.wrongFontTextColor,
            "font-size": interactionJSON.interactionData[0].time_interval_font.wrongFontSize + 'px'
        });
        // $('.game-based-temp .question-text').css('max-height', 'calc(100vh - 80vh)')
        //}, 1000);
    }

    if (interactionJSON.interactionData[0].gameSectionFlag == true) {
        if (interactionJSON.interactionData[0].feedbackScreen.feedbackScreenType == "true") {
            if (interactionJSON.interactionData[0].slides[res - 1].feedbackPanel.wrong.textContent) {

                $('.feedback-text-display').append(
                    interactionJSON.interactionData[0].slides[res - 1].feedbackPanel.wrong.textContent
                )
            } else {
                $('.feedback-text-display').hide()
            }
        } else {
            $('.feedback-text-display').hide()
        }
    } else {
        if (interactionJSON.interactionData[0].slides[optionValueArray].feedbackPanel.wrong.textContent) {
            $('.feedback-text-display').append(
                interactionJSON.interactionData[0].slides[optionValueArray].feedbackPanel.wrong.textContent
            )
        } else {
            $('.feedback-text-display').hide()
        }

    }






    $('.moveto-next-ques').attr('disabled', false)
        // $(`.knife-length img:nth-last-child(${optionValueArray + 1})`).attr('src', './images/red_Knife.png')
        // $('.knife-length').append('<img src="./images/red_Knife.png"/>')
        // selectedValue.addClass('active wrong')
        // debugger
    if (interactionJSON.interactionData[0].gameSectionFlag == true) {
        var rightAnswerList = interactionJSON.interactionData[0].slides[res - 1].questionData.answer
    } else {
        var rightAnswerList = interactionJSON.interactionData[0].slides[optionValueArray].questionData.answer
    }
    // $('.info-content').hide();
    // if (JSON.stringify(allAnswerSelected[optionValueArray]) === JSON.stringify(rightAnswerList)) {
    //   $('.feeback-content.right').show()
    // } else {
    //   $('.feeback-content.wrong').show()
    // }
    var removedValueWrong = allAnswerSelected[answerValueArray].filter((val, index) => {
        return !rightAnswerList.includes(val);
    })
    var removedValueRight = rightAnswerList.filter((val, index) => {
        return !allAnswerSelected[answerValueArray].includes(val);
    })
    $('.li-listing').css({ 'width': '90%' }, 'slow')
    $('.right-wrong-icon').css('display', 'block')
    for (var i = 0; i < allAnswerSelected[answerValueArray].length; i++) {
        //debugger
        // if (JSON.stringify(allAnswerSelected[optionValueArray]) === JSON.stringify(rightAnswerList)) {
        $('.li-listing li').eq(allAnswerSelected[answerValueArray][i]).find('input').prop('checked', true)
        $('.li-listing li').eq(allAnswerSelected[answerValueArray][i]).addClass('active')
        for (var a = 0; a < rightAnswerList.length; a++) {
            $('.li-listing li').eq(rightAnswerList[a]).addClass('active right')
            $('.li-listing li').eq(rightAnswerList[a]).find('img').attr('src', './images/correct.png')
        }
        for (var e = 0; e < removedValueRight.length; e++) {
            $('.li-listing li').eq(removedValueRight[e]).find('img').attr('src', './images/correct.png')
        }
        for (var x = 0; x < removedValueWrong.length; x++) {
            $('.li-listing li').eq(removedValueWrong[x]).addClass('active wrong')
            $('.li-listing li').eq(removedValueWrong[x]).find('img').attr('src', './images/wrong.png')
        }
        // } else {
        //   $('.li-listing li').eq(allAnswerSelected[optionValueArray][i]).addClass('active wrong')
        // }
        // $('.li-listing li.active input').prop('checked', true)

    }
    if ($(window).width() > 900) {
        $('.game-alert').fadeIn();
    }
    try {
        getCorrectAns(answerSelected, optionValueArray)
    } catch (err) {

    }
    if (interactionJSON.interactionData[0].gameSectionFlag == true) {
        if (typeof Spin_The_Wheel !== 'undefined' && Spin_The_Wheel == true) {
            // setTimeout(function() { nextAnswer(); }, 3500);
        } else if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {
            //nextAnswer();
            //info_Close();
        } else if (typeof Spin_The_Wheel_new !== 'undefined' && Spin_The_Wheel_new == true) {
            rightanswer = false;
            checkanswer();
            if (interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent) {
                $('.resultheadertext').html("")
                $('.resultheadertext').append(interactionJSON.interactionData[0].resultScreen.feedbackPanel.wrong.textContent)
            }
        } else {
            setTimeout(function() { playGameBtn(); }, 3500);
            setTimeout(function() { nextAnswer(); }, 3500);
            setTimeout(function() { bonusPointPos(); }, 3500);
            setTimeout(function() { $(".ques_head_bonus_img").hide(); }, 3500);
        }

    } else if (interactionJSON.interactionData[0].infoSectionFlag == true) {
        //setTimeout(function() { nextAnswer(); }, 3500);
        setTimeout(function() { checkInfoSection(); }, 3500);
    } else {
        setTimeout(function() { nextAnswer(); }, 3500);
    }
    // nextAnswer()
}

function valueIsEqual(arr1, arr2) {
    var n = arr1.length;
    var m = arr2.length;

    // If lengths of array are not equal means 
    // array are not equal 
    if (n != m)
        return false;

    // Sort both arrays 
    arr1.sort();
    arr2.sort();

    // Linearly compare elements 
    for (var i = 0; i < n; i++)
        if (arr1[i] != arr2[i])
            return false;

        // If all elements were same. 
    return true;
}