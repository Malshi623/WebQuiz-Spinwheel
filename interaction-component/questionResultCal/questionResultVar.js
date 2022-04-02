var optionValueArray = 0
var answerValueArray = 0
var rightAnswerSubmited = 0;
if (interactionJSON) {
    var totalCount = interactionJSON.interactionData[0].slides.length

    var allAnswerSelected = []

    function showFeedBackByKey(event) {
        if (event.keyCode === 13 || event.keyCode === 32) {
            showFeedback();
        }
    }

    //show feedback code remove here

    var answerSumbitedRight = false
    var percentageScore;
    var userAnswer = false;
    var disabledKnife = false
    var bonusPoints = 0
}