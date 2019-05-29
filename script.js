var vertices = [
            -0.5,0.5,0.0,
            0.0,0.5,0.0,
            -0.25,0.25,0.0, 
         ];

var width = window.innerHeight * .95;

function load() {
        var canvas = document.getElementById("webgl-logo");
        var gl = canvas.getContext('experimental-webgl');
        var vertex_buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        /*==*/
        var vertCode = 'attribute vec3 coordinates;'  + 
        'void main(void) {' +
           ' gl_Position = vec4(coordinates, 1.0);' +
           'gl_PointSize = 10.0;'+
        '}';
        var vertShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertShader, vertCode);
        gl.compileShader(vertShader);
        // fragment shader source code
         var fragCode =
            'void main(void) {' +
               ' gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' +
            '}';

         // Create fragment shader object
         var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

         // Attach fragment shader source code
         gl.shaderSource(fragShader, fragCode);

         // Compile the fragmentt shader
         gl.compileShader(fragShader);
         
         // Create a shader program object to store
         // the combined shader program
         var shaderProgram = gl.createProgram();

         // Attach a vertex shader
         gl.attachShader(shaderProgram, vertShader); 

         // Attach a fragment shader
         gl.attachShader(shaderProgram, fragShader);

         // Link both programs
         gl.linkProgram(shaderProgram);

         // Use the combined shader program object
         gl.useProgram(shaderProgram);

         /*======== Associating shaders to buffer objects ========*/

         // Bind vertex buffer object
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

         // Get the attribute location
         var coord = gl.getAttribLocation(shaderProgram, "coordinates");

         // Point an attribute to the currently bound VBO
         gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);

         // Enable the attribute
         gl.enableVertexAttribArray(coord);

         /*============= Drawing the primitive ===============*/

         // Clear the canvas
         gl.clearColor(0.5, 0.5, 0.5, 0.9);

         // Enable the depth test
         gl.enable(gl.DEPTH_TEST);
 
         // Clear the color buffer bit
         gl.clear(gl.COLOR_BUFFER_BIT);

         // Set the view port
         gl.viewport(0,0,canvas.width,canvas.height);

         // Draw the triangle
         gl.drawArrays(gl.POINTS, 0, 3);










        gl.clearColor(0.9,0.9,0.8,1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        
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
