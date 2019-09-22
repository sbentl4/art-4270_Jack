
let img;
let img2;
let fr = 15;
var sky= 5;
var canwidth = 400;
var gl;
let pg;
var r, g, b = 0;
var t1 = 125;
var t2 = 125;
var t3 = 125;
var adjvar = 4;
var pixs = 1;
var resolushin = 75;
var buttr;
var spinspd = 0.01;
let threed;

var bunz = document.querySelector('#a1');
// var butn = document.getElementById('a1');
// var butn = document.querySelector("#animation-onoff");
// var verb = document.querySelector("strong");

function preload(){
	img = loadImage('assets/cats.jpg');
	img2 = loadImage('assets/b.jpg');
}
function setup() {
	threed = createGraphics(710, canwidth,);
	 bunz = select('#a1');

		var p = 0.01 * pixs;
		pixelDensity(p);
		frameRate(fr);
		let canvas= createCanvas(710, canwidth, WEBGL);
		canvas.parent('canvas-test');
		// canvas.id('canvas');
	 // filter(ERODE);
	 // var canvas = document.getElementById("canvas-view");
	 // var gl= createCanvas(710, canwidth, WEBGL);
	 // var canvas = document.getElementById("canvas-view");
	 // gl = canvas.getContext("webgl")
		//  ||canvas.getContext("experimental-webgl");
	 // filter(ERODE);
	 // filter(gray);
	// buttr = createButton('Rain');//= select('rain');
	// buttr.parent('#a1');
  pg = createGraphics(256,256);
}


function draw() {
	clear();




	// buttr.mouseClicked();
		 bunz.mouseClicked(pagebut);
// bunz.mouseClicked();
// bunz.addclass('mycass');
	if (pixs < resolushin)
	{
		pixs = millis() / 100;
		// console.log(pixs);
		var p = 0.01 * pixs;
		pixelDensity(p);
	}

  // background(0, 30, 50);
push();

randomcolor();
fill(r, g, b); // green
translate(-width / 2, -height / 2, 0); //moves our drawing origin to the top left corner
// translate(55, 55);
noStroke();
rect(0,10,50,50);
pop();
noStroke();


	pg.background(255);
  pg.text('hello world!', 100, 50);
  //pass graphics as texture
  texture(pg);
  // plane(100);
	t1 = shadechange(t1);
	t2 = shadechange(t2);
	t3 = shadechange(t3);

	// console.log(t1);
// shadechange(t1);
// shadechange(t2);
// shadechange(t3);
  tint(255, 75, 231);
  tint(t1, t2, t3);
	texture(img2);
	push();
// translate(0, 0, 0);
	translate(0, 0, -200);
	plane(500);
	pop();
// translate(0, 0, 200);
// image(img, 50, 0);


	tint(255, 255, 255);

for (var i = 1; i < sky + 1; i++) {
	fill(20 * i);
	// fill(0);
 rect(20 * i, 100, -10* i, 100);
}


	push();
  translate(0,150, 0);
	texture(img);
  box(400, 70, 170);

//flamingo box
  translate(-0, -200, 0);
  rotateZ(frameCount * spinspd);
  rotateX(frameCount * spinspd);
  rotateY(frameCount * spinspd);
	tint(255, 153, 204);
	texture(img2);
  // torus(70, 20);
	box(100, 100, 100);
  pop();
	// canvas.setTransform(1,0,0,1,0,0); // reset transform

testmouse();
	// if ()
}//end draw

function randomcolor(){
	r = random(0, 255);//randomize colors
b = random(0, 255);
g = random(0, 255);
// return (r, g, b);
}

function shadechange(sc){
	var adjust=random(0, adjvar);
	var flip=random(0, 10);

if ( sc >= 255 ){
	if ( sc <= 0){
		sc += adjust;
	} else {
		sc -= adjust;
	}
} else {
	if(flip > 5){
		sc += adjust;
	}else{
		sc -= adjust;
	} //end if
}


return sc;
// console.log("sc" + adjust);
}//end shadechange

function startAnimation(evt) {
	button.removeEventListener(evt.type, startAnimation, false);
	button.addEventListener("click", stopAnimation, false);
	verb.innerHTML="stop";
	// Setup animation loop by redrawing every second.
	timer = setInterval(drawAnimation, 1000);
	// Give immediate feedback to user after clicking, by
	// drawing one animation frame.
	drawAnimation();
}//end function start
function stopAnimation(evt) {
	button.removeEventListener(evt.type, stopAnimation, false);
	button.addEventListener("click", startAnimation, false);
	verb.innerHTML="start";
	// Stop animation by clearing the timer.
	clearInterval(timer);
}//end stop

function pagebut(){
	console.log('dog');
	spinspd += 0.05;
}
function testmouse(){
	fill(255);
	if(mouseX > -70 && mouseX < 70){
		if (mouseY > -120 && mouseY < 20){
			fill(0);
		}
	}
	stroke(0);
	rect(-70, -120, 140, 140);

}
function mouseClicked(){
	// if
}
