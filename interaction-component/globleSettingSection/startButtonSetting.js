$(window).on("load", function() {

    $('.containAll').fadeOut();
    var footerButtonHeight = $('.start-assessment').height()
    var totalHeightButtonValue = footerButtonHeight + 50
    $('#interactionIntrodutionContent .text-sec.top-btm .text-content-added').css('margin-bottom', totalHeightButtonValue + 'px')
    startBtnPos()

});

$(document).ready(function() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function startBtnPos() {
    var introSec = $(".introduction-sec").innerHeight() - 50;
    var wHt = window.innerHeight - 50;
    if (introSec > wHt) {
        $('.assesment-start-btn').css("position", "absolute");
    } else {
        $('.assesment-start-btn').css("position", "fixed")
    }

}

function functionscrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function questionscrollToTop() {
    var myDiv = document.getElementsByClassName('game-based-temp');
    scrollTo(myDiv, 0, 100);
}