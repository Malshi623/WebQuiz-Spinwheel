var gameTextConstant = interactionJSON.textConstant;

function getOptions(optionValueArray) {
    //alert(optionValueArray)
    // alert(res)

    $('.game-based-temp').html('')

    if (firstQuestion == true || firstQuestion == 'true') {

    } else {
        var tempval = res - 1;
        optionValueArray = tempval;
    }

    var questionContent = []
    questionContent = interactionJSON.interactionData[0].slides[optionValueArray]
    var questionLength = interactionJSON.interactionData[0].slides.length;
    var gameBasedContent = interactionJSON.interactionData[0];
    var rightContentSize = 100 - questionContent.appliedSliderValue;
    $('.game-based-temp').html('')

    $('.game-based-temp').append(`
        <div class="widget-card">
          <div class="clearfix"></div>
          <div class="right-panel float-right text-sec wow fadeInRight" style="width:100%;">
          
          ${interactionJSON.interactionData[0].introductionSlides[0].spinTheWheel == true?
          ``:`<div class="question_title_cls Spin_The_Wheel_Not">
          <div class="ques_head_img"><img class="ques_head_img_img" src="./images/infoHeadingbg.png" /> <span class="ques_head_img_span">Question</span></div>
          <div class="ques_head_bonus_img"><img class="ques_head_img_green" src="./images/bonus_green.png" /> <img class="ques_head_img_red" src="./images/bonus_red.png" /> <span class="ques_head_img_span"> + 5 Bonus Points </span></div> 
          </div>`
           }
          
              <!-- <div class="header-top-div"></div> -->
              <div class="question-text cls_${optionValueArray}">
                <div class="question-text-scroll">
                  <h1 style="
                  font-family:${gameBasedContent.time_interval_font.selectedFontFamily};
                  font-size:${gameBasedContent.time_interval_font.selectedFontSize}px;
                  color:${gameBasedContent.time_interval_font.seletedFontTextColor};
                  ">${questionContent.questionData.questionContent}</h1>
                  <ul class="li-listing">
                  </ul>
                </div>
              <div class="feedback-text-display" role="gridcell"></div>
              </div>
              <div class="footer-bottom-div cls_${optionValueArray}">
                <button disabled class="btn btn-green submit-answer" onclick="submitAnswerInstant(${JSON.stringify(questionContent.questionData.answer) + ',' + false + ',' + optionValueArray})" style="">${gameTextConstant.Slides.SUBMIT}</button>
                
                <button disabled class="btn btn-green hidden-submit-answer" onclick="submitAnswerInstant(${JSON.stringify(questionContent.questionData.answer) + ',' + true + ',' + optionValueArray})" style="">Submit</button>
              </div>
          </div>
          <audio id="ballonBonus" class="active" preload="none"><source src="./sounds/bonus.mp3"></audio>
          <audio id="ballonBonusWrong" class="active" preload="none"><source src="./sounds/wrong.mp3"></audio>
          
          <div class="clearfix"></div>
         
          ${interactionJSON.interactionData[0].audioData.acrossAllSlides.checked == false && interactionJSON.interactionData[0].audioData.audioSlideData[optionValueArray].src ?
        `<audio class="active" preload="none"><source src="${interactionJSON.interactionData[0].audioData.audioSlideData[optionValueArray].src}"></audio>` : ``}
          </div>`
    );
    $('head').append(
      `<style>
        .btn.btn-green{
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.15) 100%);
          background-color: ${interactionJSON.interactionData[0].navigation.submitButton.normalState};
          font-family: ${interactionJSON.interactionData[0].navigation.submitButton.selectedFontFamily};
          font-size: ${interactionJSON.interactionData[0].navigation.submitButton.selectedFontSize}px;
          color: ${interactionJSON.interactionData[0].navigation.submitButton.seletedFontTextColor};
        }
        @media not all and (pointer: coarse) {
          .btn.btn-green:hover{
            background-color: ${interactionJSON.interactionData[0].navigation.submitButton.hovarState};
          }
        }
        ${interactionJSON.interactionData[0].resultScreen.showTimeTaken === true ?
        `@media only screen and (max-width: 900px) and (orientation: landscape) {
          .right-panel.float-right.text-sec.wow.fadeInRight:before {
              width: 50%;
              ${questionContent.appliedSwapContentType === true ? 'left:0; right:auto' : 'right:0; left:auto'}
          }
          .game-based-temp .question-text{
            margin-top: 30px;
          }
        }`: ``}
      </style>`
    )
    if (interactionJSON.interactionData[0].slides) {
      var questionOptions = [];
      var optionValue = 0;
      $('.question-text').append(questionOptions)
      interactionJSON.interactionData[0].slides[optionValueArray].questionData.options.map(
        (qustions, index) => {
          questionOptions.push(`
        <li>
          <label style="
                  font-family:${gameBasedContent.time_interval_font.optionFontFamily};
                  font-size:${gameBasedContent.time_interval_font.optionFontSize}px;
                  color:${gameBasedContent.time_interval_font.optionFontTextColor};
                  " class="container ${questionContent.questionData.optionType === 'MCQ' ? 'mcq' : 'mrq'}">
                  ${qustions}
          <input onclick="labelOptionCLick(this, event, optionValueArray)" type="${questionContent.questionData.optionType === 'MCQ' ? 'radio' : 'checkbox'}" name="radio" value="${optionValue}">
          <span class="checkmark"></span>
          </label>
          <img src="" class="right-wrong-icon">
        </li>
        `)
          optionValue = optionValue + 1;
        }
      )
      $('.li-listing').append(questionOptions)
    }
  };