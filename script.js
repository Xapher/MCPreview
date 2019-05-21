function load() {
	var buttonStringStart = "<button class=MCStyle id=";
        var width = window.innerWidth * .95;
        var testWidth = width / 50;
        var buttonMiddle= " style=\"width:" + testWidth + "px; height:" + testWidth + "px;background-image:url('blocks/grass_top.png');\"onclick=changeBlock(";
        var buttonStringEnd = ")></button>";
	var n = ((window.innerWidth * .8) * .02) / 100;
	var divString = "";
        var id = "mcButton";
	for (var i = 0; i < 50 * 50; i++) {
		divString =  divString + (buttonStringStart + (id + i) + buttonMiddle + id + i + buttonStringEnd);	
	}
	//window.innerWidth
	document.getElementById("grid").innerHTML = divString;
	var buttons = document.getElementsByTagName('buton');
	console.log(buttons);
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.width = window.innerWidth + "px";
	}
	
}

var curBlock = "blocks/grass_top.png";
function changeBlock(argument) {
    argument.style.backgroundImage = "url('" + curBlock + "')";
    console.log(argument);
}
