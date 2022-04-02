// ${interactionJSON.interactionData[0].resultScreen.showTimeTaken === true ?
//   `<li class="result-info time-taken-div">
//     <div class="left-text float-left">
//       <p class="text-display">${gameTextConstant.ResultScreen.TIME_TAKEN}</p>
//       <h4 class="time-taken"> - </h4>
//     </div>
//     <img class="float-right mar-top18" src="./images/Time.svg" alt="${gameTextConstant.ResultScreen.TIME_TAKEN}">
//   </li>` : ``
// }
function resultSection() {


    $('.result-screen').append(`
<div class="inner-container">
${interactionJSON.interactionData[0].resultScreen.isShowLogo === true ?
  `<div class="logo_result">
  <img class="logo_img" src="${interactionJSON.interactionData[0].resultScreen.resultScreenLogo}" alt="result logo"/>
  </div>`:``
}
<div class="speedo-meter-result">

  <div class="resultheadertext"></div>
  
</div>
<div class="info-div">
  <ul>
    ${interactionJSON.interactionData[0].resultScreen.date === true ?
    `<li class="result-info date-div">
      <div class="left-text float-left">
        <p class="text-display">${gameTextConstant.ResultScreen.DATE}</p>
        <h4 class="todays-date">${formatDate(new Date())}</h4>
      </div>
      <img class="float-right mar-top18" src="./images/calendar.svg" alt="${gameTextConstant.ResultScreen.DATE}">
    </li>` : ``
  }
  ${interactionJSON.interactionData[0].resultScreen.showTimeTaken === true ?
    `<li class="result-info time-taken-div">
      <div class="left-text float-left">
        <p class="text-display">${gameTextConstant.ResultScreen.TIME_TAKEN}</p>
        <h4 class="time-taken"> - </h4>
      </div>
      <img class="float-right mar-top18" src="./images/clock.svg" alt="${gameTextConstant.ResultScreen.TIME_TAKEN}">
    </li>` : ``
  }
    <li class="result-info score-div">
      <div class="left-text float-left">
        <p class="text-display">${gameTextConstant.ResultScreen.SCORE}</p>
        <h4 class="score-obtained"> - </h4>
      </div>
      <img class="float-right mar-top18" src="./images/score.svg" alt="${gameTextConstant.ResultScreen.SCORE}">
    </li>
   
    ${interactionJSON.interactionData[0].resultScreen.bonus === true ?
    `<li class="result-info bonus-div">
      <div class="left-text float-left">
        <p class="text-display">Bonus</p>
        <h4 class="bonusPoint"> 0 </h4>
      </div>
      <img class="float-right mar-top18" src="./images/score.svg" alt="">
    </li>`:``
   }
   ${interactionJSON.interactionData[0].resultScreen.coin === true ?
    `<li class="result-info bonus-div">
      <div class="left-text float-left">
        <p class="text-display">Gold Coins</p>
        <h4 class="bonusPoint"> 0 </h4>
      </div>
      <img class="float-right mar-top18" src="./images/result-gold-coins.png" alt="">
    </li>`:``
   }
    ${interactionJSON.interactionData[0].resultScreen.scoreInPercentage === true ?
    `
      <li class="result-info percentage-div">
      <div class="left-text float-left">
        <p class="text-display">${gameTextConstant.ResultScreen.PERCENTAGE}</p>
        <h4 class="score-obtained-percentage"> - </h4>
      </div>
      <img class="float-right mar-top18" src="./images/percentage.svg" alt="${gameTextConstant.ResultScreen.PERCENTAGE}">
    </li>
      `: ``}

      ${interactionJSON.interactionData[0].resultScreen.showLevel === true ?
        `
          <li class="result-info percentage-div">
          <div class="left-text float-left">
            <p class="text-display">${gameTextConstant.ResultScreen.PERCENTAGE}</p>
            <h4 class="score-obtained-percentage"> - </h4>
          </div>
          <img class="float-right mar-top18" src="./images/percentage.svg" alt="${gameTextConstant.ResultScreen.PERCENTAGE}">
        </li>
          `: ``}

          ${interactionJSON.interactionData[0].resultScreen.scoreAchieved === true ?
            `
              <li class="result-info point">
              <div class="left-text float-left">
                <p class="text-display">Points</p>
                <h4 class="score-point-achive"> - </h4>
              </div>
              <img class="float-right mar-top18" src="./images/percentage.svg" alt="${gameTextConstant.ResultScreen.PERCENTAGE}">
            </li>
              `: ``}
  </ul>
  
  ${interactionJSON.interactionData[0].feedbackScreen.feedbackScreenType === "false" ?
    `<a onclick="showFeedback()" onkeyup="showFeedBackByKey(event)" class="btnviewanswer inline-block btn btn-green refresh-btn">${gameTextConstant.ResultScreen.VIEW_FEEDBACK}</a>` : ``
  }
  ${interactionJSON.interactionData[0].resultScreen.viewAnswerButton === true?
      `<a onclick="showFeedback()" onkeyup="showFeedBackByKey(event)" class="btnviewanswer inline-block btn btn-green refresh-btn">${gameTextConstant.ResultScreen.VIEW_FEEDBACK}</a>` : ``
    }

    ${interactionJSON.interactionData[0].resultScreen.restartButton === true ?
      `<a onkeyup="refreshPageByKey(event)" onclick="refreshPage()" class="inline-block btn btn-green refresh-btn">${gameTextConstant.ResultScreen.RESTART_ASSESSMENT}</a>` : ``
    }
</div>
<div class="clearfix"></div>
</div>
<div class="feedback-popup">
  <div class="feedback-inner-container">
  </div>
</div>
`)
}

$(document).ready(function () {
 $(".result-screen").css('background-image', 'url(' + interactionJSON.interactionData[0].result_screen_bg + ')');
//debugger
if (typeof super_gold_game !== 'undefined' && super_gold_game == true) {
$(".bonus-div").find(".text-display").html("Gold Coins")
}
});

// /<a onclick="showFeedback()" onkeyup="showFeedBackByKey(event)" class="inline-block btn btn-green refresh-btn">${gameTextConstant.ResultScreen.VIEW_FEEDBACK}</a>
// <h1>${gameTextConstant.ResultScreen.GAMEBASED_RESULT}</h1>