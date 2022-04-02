function introSection() {

    //create introduction Main Div 
    if (interactionJSON) {
        $('body').prepend(`
        <section class="introduction-sec slectedDiv">
            <div class="overlay-content"></div>
            <div id="introduction-audio" class="introduction-audio"></div>
            <div id="demos" class="">
            <div class="introduction-logo-img-parent">
                <img class="introduction-logo-img" src="${interactionJSON.interactionData[0].introductionSlides[0].logoImage}" alt="${interactionJSON.interactionData[0].introductionSlides[0].logoAltText}">
            </div>
            <div id="interactionIntrodutionContent"></div>
            </div>            
        </section>        
        `)


        if (interactionJSON.introductionScene === true) {
            $(".introduction-sec").show();
            $(".introduction-sec").attr({
                'id': 'slide0',
                'data-slide': '0'
            })
            $(".introduction-sec").addClass('slide')
        }
        $("#interactionTitle").html(
            $.parseHTML(interactionJSON.textConstant.IntroductionSlide.START_ASSESSMENT)
        );

        var discriptionText = $(document.createElement("div"));
        discriptionText.attr('class', 'text-sec top-btm')

        var innerDiscriptionText = $(document.createElement("div"));
        innerDiscriptionText.attr({
            'class': 'text-content-added',
            'role': 'gridcell'
        })
        innerDiscriptionText.html(interactionJSON.interactionData[0].introductionSlides[0].textContent)

        discriptionText.append(innerDiscriptionText)

        $('#interactionIntrodutionContent').append(discriptionText)

        //instoduction section image shankar committed
        if (interactionJSON.interactionData[0].introductionSlides[0].appliedContentType === 'Image') {
            $(".introduction-sec").css('background-image', 'url(' + interactionJSON.interactionData[0].introductionSlides[0].imageUrl + ')');
            // $(".introduction-sec").attr('role', 'img');
            $(".introduction-sec").attr('aria-label', interactionJSON.interactionData[0].introductionSlides[0].altText);
        } else if (interactionJSON.interactionData[0].introductionSlides[0].appliedContentType === 'Color') {
            $(".introduction-sec").css("background-color", interactionJSON.interactionData[0].introductionSlides[0].backgroundColor);
        }


        var slideWrapperDiv = $(document.createElement("div"));
        slideWrapperDiv.attr("class", "carousel-cell");



        var innerDiv = $(document.createElement("div"));
        innerDiv.attr("class", "inner smoothshow");


        var clearFixDiv = $(document.createElement("div"));
        clearFixDiv.attr("class", "clearfix");
        innerDiv.append(clearFixDiv);

        // slideWrapperDiv.append(overlayDiv);

        slideWrapperDiv.append(innerDiv);
        slideWrapperDiv.append(`
          <div class= "assesment-start-btn" >
                <button class="btn btn-green submit-answer start-assessment normal-state" onclick="startAssesment()">${interactionJSON.textConstant.IntroductionSlide.START_ASSESSMENT}</button>
          </div >
          `)


        if (interactionJSON.interactionData[0].audioData.introductionSlide.src) {
            if (interactionJSON.interactionData[0].audioData.introductionSlide.src && interactionJSON.interactionData[0].audioData.acrossAllSlides.checked === false) {
                var audio = $(document.createElement("audio"));
                audio.attr("id", "start");
                audio.attr("class", "active");

                var source = $(document.createElement("source"));
                source.attr(
                    "src",
                    interactionJSON.interactionData[0].audioData.introductionSlide.src
                );
                if (
                    interactionJSON.interactionData[0].audioData.introductionSlide.src
                    .toLowerCase()
                    .indexOf(".mp3") !== -1
                ) {
                    source.attr("type", "audio/mp3");
                } else if (
                    interactionJSON.interactionData[0].audioData.introductionSlide.src
                    .toLowerCase()
                    .indexOf(".ogg") !== -1
                ) {
                    source.attr("type", "audio/ogg");
                }

                audio.append(source);
                slideWrapperDiv.append(audio);
            }


        }

        $("#interactionIntrodutionContent").append(slideWrapperDiv);
    }

    function audioPause() {
        if ($(".slectedDiv audio.active")) {
            $("audio.active").each(function() {
                this.pause(); // Stop playing
            });
        } else {
            $(".slectedDiv audio.active").each(function() {
                this.pause();
            });
            $(".interaction-audio audio.active")
                .get(0)
                .pause();
        }
        pausedNot = false;
    }

    function audioPlay() {
        if ($('.game-based-temp').hasClass('active')) {
            if (interactionJSON.interactionData[0].audioData.acrossAllSlides.checked === true) {
                $(".interaction-audio audio.active")
                    .get(0)
                    .play();
            } else {
                $(".game-based-temp audio.active").each(function() {
                    this.play();
                });
            }
        } else if ($('.result-screen').hasClass('active')) {
            if ((interactionJSON.interactionData[0].audioData.passResult.src || interactionJSON.interactionData[0].audioData.failResult.src) && interactionJSON.interactionData[0].audioData.acrossAllSlides.checked === false) {
                $(".result-screen .result-audio").each(function() {
                    this.play();
                });
            } else if (interactionJSON.interactionData[0].audioData.acrossAllSlides.checked === true) {
                $(".interaction-audio audio.active")
                    .get(0)
                    .play();
            }
        } else if (interactionJSON.interactionData[0].audioData.acrossAllSlides.checked === true) {
            $(".interaction-audio audio.active")
                .get(0)
                .play();
        } else {
            if ($(".slectedDiv audio.active").length > 0) {
                $(".slectedDiv audio.active").each(function() {
                    this.play();
                });
            } else {
                $(".slectedDiv audio.active").each(function() {
                    this.play(); // Stop playing
                    $(".slectedDiv audio.active").removeClass("paused");
                });
            }
        }
        pausedNot = true;
    }
}