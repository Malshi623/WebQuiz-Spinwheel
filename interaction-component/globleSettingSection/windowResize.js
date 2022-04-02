$(document).ready(function() {
    if ($(window).width() > 900) {
        $(".question-text .question-text-scroll").mCustomScrollbar({
            theme: "light",
        });
    } else {
        $(".question-text .question-text-scroll").mCustomScrollbar('destroy');
    }
});

var windowWidth = $(window).width();
var windowHeight = $(window).height();
var documentWidth = document.getElementsByTagName("html")[0].offsetWidth;
$(window).resize(function() {
    if ($(window).width() != windowWidth && ($(window).width() == 992 || $(window).width() == 768 || $(window).width() < 768 ||
            $(window).width() == 375 || $(window).width() == 812 || $(window).width() == 768 ||
            $(window).width() == 576 || $(window).width() == 1024 ||
            ($(window).width() < 900 && window.innerHeight < window.innerWidth) || ($(window).width() == 1024 && window.innerHeight < window.innerWidth) ||
            ($(window).width() == 812 && window.innerHeight < window.innerWidth))) {
        $('.containAll').fadeIn();
        this.location.href = this.location.href;
        windowWidth = $(window).width();
    }
})

window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    startBtnPos()
    resizeQuestionContent()
    var footerSubmitBottomHeight = $('.game-based-temp').width()
    if ($(window).width() > 900) {
        $('.slectedDiv .game-based-temp .footer-bottom-div').css('width', 'calc(' + footerSubmitBottomHeight + 'px - 60px')
    }
});

function resizeQuestionContent() {
    debugger;
    var footerBottomHeight = $('.footer-bottom-div').innerHeight()
    var documentHeight = $(document).height();
    if (typeof Spin_The_Wheel_new !== 'undefined' && Spin_The_Wheel_new == true) {
        var totalHeightValue = footerBottomHeight;
    } else {
        var totalHeightValue = footerBottomHeight + 80;
    }

    // console.log('Value',footerBottomHeight,documentHeight,totalHeightValue)
    // max-height: ;
    var footerSubmitBottomHeight = $('.game-based-temp').width()

    if ($(window).width() > 900) {
        $('.question-text .question-text-scroll').mCustomScrollbar({
            theme: 'light'
        })
        $('.game-based-temp .question-text,.game-based-temp .question-text-scroll').css({
            'max-height': 'calc(' + documentHeight + 'px - ' + totalHeightValue + 'px)',
            'height': 'calc(' + documentHeight + 'px - ' + totalHeightValue + 'px)',
        })
        $('.slectedDiv .game-based-temp .footer-bottom-div').css('width', 'calc(' + footerSubmitBottomHeight + 'px - 60px')
    } else {
        $('.game-based-temp .li-listing').css('padding-bottom', footerBottomHeight)
    }
}
$(window).on("orientationchange", function(event) {
    this.location.href = this.location.href;
});