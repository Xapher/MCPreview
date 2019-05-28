function load() {
        var canvas = document.getElementById("webgl-logo");
        var gl = canvas.getContext('experimental-webgl');
        gl.clearColor(0.9,0.9,0.8,1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var width = window.innerHeight * .95;
        document.getElementById("grid").style.height = width + "px";
        document.getElementById("grid").style.width = width + "px";
        var gridSize = 25;
	var buttonStringStart = "<button class=MCStyle id=";
        
        var testWidth = width / gridSize;
        var buttonMiddle= " style=\"width:" + testWidth + "px; opacity:0.6; background-size:100%; height:" + testWidth + "px;background-image:url('blocks/grass_top.png');\"onclick=changeBlock(";
        var buttonStringEnd = ")></button>";
	var n = ((window.innerWidth * .8) * .02) / 100;
	var divString = "";
        var id = "mcButton";
	for (var i = 0; i < gridSize * gridSize; i++) {
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

var grass = width*width;
var glass = 0;
var stone = 0;
var cobblestone = 0;
var obsidian = 0;
var bricks = 0;
var plankOak = 0;
var plankBirch = 0;
var plankSpruce = 0;
var plankDarkOak = 0;
var plankJungle = 0;
var plankAcacia = 0;



var curBlock = "blocks/grass_top.png";
var grc = "url(\"blocks/grass_top.png\")";
function changeBlock(argument) {
    var curBack = argument.style.backgroundImage;
    if(curBack == grc) {
        console.log("--grass");
    }

    

    if(curBlock == "blocks/grass_top.png")
    {
        argument.style.opacity = 0.6;
    }
    else {
        argument.style.opacity = 1;
    }
    argument.style.backgroundImage = "url('" + curBlock + "')";
    console.log(argument);
}

function changeblock(arg) {
        curBlock = arg;
}
