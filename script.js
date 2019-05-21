function load() {
	var buttonString = "<button id=MCStyle style=\"width:" + (window.innerWidth * .8) * .02 + "px; height:" + (window.innerWidth * .8) * .02 + "px;\"onclick=changeBlock(";
        var buttonStringEnd = ")></button>";
	var n = ((window.innerWidth * .8) * .02) / 100;
	var divString = "";
        var id = "mcButton";
	for (var i = 0; i < 100; i++) {
		divString =  divString + (buttonString + id + i + buttonStringEnd);	
	}
	//window.innerWidth
	document.getElementById("grid").innerHTML = divString;
	var buttons = document.getElementsByTagName('buton');
	console.log(buttons);
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.width = window.innerWidth + "px";
	}
	
}

var curBlock;
function changeBlock(argument) {
    document.getElementById(argument);
    Console.log(argument);
}
