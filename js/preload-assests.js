$(document).ready(function() {
    var totalImages = [
        './images/speaker_off.svg',
        './images/speaker_on.svg',
        './images/question.svg',
        './images/clock.svg',
        './images/calendar.svg',
        './images/Small_flag.png',
        './images/score.svg'
    ];

    for (let index = 0; index < totalImages.length; index++) {
        const element = totalImages[index];
        const img = new Image();

        img.src = element;
    }
});