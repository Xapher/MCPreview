function load() {
	var buttonString = "<button id=MCStyle></button>";
	var divString = "";
	for (var i = 0; i < 100; i++) {
		divString =  divString + buttonString;	
	}
	document.getElementById("grid").innerHTML = divString;
}
