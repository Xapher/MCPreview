function load() {
	var buttonString = "<button id=MCStyle style=\"width:" + (window.innerWidth * .8) * .02 + "px; height:" + (window.innerWidth * .8) * .02 + "px;\"onclick=changeBlock()></button>";
	var n = ((window.innerWidth * .8) * .02) / 100;
	var divString = "";
	for (var i = 0; i < 100; i++) {
		divString =  divString + buttonString;	
	}
	//window.innerWidth
	document.getElementById("grid").innerHTML = divString;
	var buttons = document.getElementsByTagName('buton');
	console.log(buttons);
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.width = window.innerWidth + "px";
	}
	
}
