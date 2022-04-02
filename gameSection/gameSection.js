function gameSection() {
    $('.gamezone').html('')
    $('.gamezone').append(`
    <div class="widget-content-panel wow information-panel">
    <div class="gameMessage">Hit at desired points to see the question. Answer the question correctly to reach the goal mentioned on the top of the wheel</div>
    <div class="targetValue"></div>
    
		<button id="spin">Spin</button>
        <button id="spinStop"><img src="./images/arrow.png" /></button>
        <button class="endGame btn btn-green">End Game</button>
        <div class="visited_popup">Spin again! <br/> Question already visited, choose another. <span class="close_btn">X</span></div>
		<div class="roulet_round"></div>
        <div class="clscongra">Congratulations <br/> You have reached your goal! <span class="close_btn_congra">X</span></div>
		<div class="container mainDiv">
        
      
        <div>
        
    `)
    $(".targetValue").html("00 / " + interactionJSON.interactionData[0].resultScreen.passingPercent)
}
//<span class="arrow"></span>