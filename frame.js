let pg;
let wgl;
let img;
let cat;
let timer= 0;
// let scl = 75;
var scl = 500;
// var scal = 5;
var sclt = 0;
var size = 0;
var t1, t2, t3;
var adjvar = 4;
var pixs = 1;
var resolushin = 75;
var img2;
var clk = 1;
var hidd = 1000;
let corg;
let curg = 1;
// let movy = 0;
let movmax = 10;

var x1 = 0;
// this.x1 = 0;
let x1s = x1 + 5;
let x2s = x1 - 5;
var flip = true;
// let eyeZ = ((600/2.0) / tan(PI60.0/360.0));

let block = [];
let handy = false;
// let canvas;

let wb;
let imgw;
let imgs;
let ctxw;
let canx = 100;
let cany = canx;
let globalTime = 0;
let strs;
let imgt;
let globe;

// let bgc;



function preload(){
  img = loadImage('assets/b.jpg');
  img2 = loadImage('assets/b.jpg');
  corg = createImg('assets/corg.png');
  cat = loadImage('assets/lilBub.jpg');
  imgw = createImg('assets/b.jpg');
  imgs = createImg('assets/stars.png')
  globe = createImg("assets/Earth-06.gif");
  imgw.hide();
  imgs.hide();
  // globe.hide();
}
function setup() {
  // console.log(imgs);
  wb = createGraphics(canx, cany);
  // strs = createGraphics(imgs.width, imgs.height);

  // strs = createGraphics(imgs.width * 3, imgs.height * 3);
  // for (var i = 0; i < 3; i++) {
  //   // console.log(i);
  //     for (var j = 0; j < 3; j++) {
  //       strs.image(imgs, imgs.width * i, imgs.width * j);
  //
  //     }
  //   // strs.image(imgs, 0, imgs.width * i);
  //   // strs.image(imgs, imgs.height * i, imgs.width * i);
  // }//end for
  // // strs.save('stars.png')
  // imgt = createImg(strs);
  //

  ctxw = wb.drawingContext;

  block[0] = new Block("/camtest.html", 150, 150, 200, 200);
  // block[1] = new Block("bg.html", 120, 10, 100, 100);
  block[1] = new Block("wobble.html", 10, 225, 75, 50, "Wobble");
  block[2] = new Block("bg.html", 415, 225, 75, 50, "bg");
  block[3] = new Block("bg.html", 10, 320, 75, 62, "cube3");
  block[4] = new Block("https://www.google.com", 415, 320, 75, 62, "cube 4");

  noCursor();
  let canvas = createCanvas(500, 500);
  canvas.parent('canvas-test');
  pg = createGraphics(scl, scl);
  wgl = createGraphics(scl, scl, WEBGL);
  strs = createGraphics(200, 200);


  wgl.t1 = 100;
  wgl.t2 = 100;
  wgl.t3 = 100;
  // console.log(pg);
}
function draw() {
  clear();
  wobb(imgw, wb);
  // wobb(imgs, strs);
  // wb.background(0);


  // setTransform(1,0,0,1,0,0); // reset transform
  adjres();
  // background(0, 10, 30);
  // image(wb, 0, 0, 400, 400);
  // background(200);
  // pg.background(150);
  pg.noStroke();
  if (timer < scl)
  {
    timer = second();
    // timer = (millis() / 200);
    // scl = timer * 10;
    // sclt++;
    // console.log(scl);
  }//end if
  // console.log(sclt);
  pg.height = scl;//
  pg.width = scl;
  // console.log(pg.height);
  // requestAnimationFrame();

  pg.image(img, 0, 0, scl, scl);//
  pg.ellipse(pg.width / 2, pg.height / 2, 10, 10);

  // image(pg, 0, 0, 500, 500);//LEAVE AT 500, finl product scaled up
  // wgl.background(200);
  fill(0);


  // image(wb, 0, 0, 400, 400);
  wglfunc();
  globe.parent('canvas-test');
  globe.style.color = "red";
  // globe.position(50, 50);
  // image(globe);
  // corg.position(mouseX + 185, mouseY + 25);
  // image(globe, mouseX, mouseY);
  //
  // testmouse();
  handy = false;
  noCursor();
  // cursor(ARROW);
  moveadjust();
  // text('x1: ' + x1, 100, 100);
  for (var i = 0; i < block.length; i++) {
    var handys = block[i].curs(x1);
    fill(100, 75);
    // block[i].display();
    block[i].show();
    if (handys == true)
      handy = true;
  }//end for
  if (handy == true)
  cursor(HAND);
  // rect(100, 100 + movy, 10, 10);
  // image(pg, 500, 500);
}//end draw

function wglfunc(){
  wglbg();
  sidebutton();
  wgl.push();
  wgl.noStroke();
  wgl.rotateZ(frameCount * 0.01 * clk);
  wgl.rotateX(frameCount * 0.01 * clk);
  wgl.rotateY(frameCount * 0.01 * clk);
  wgl.t1 = shadechange(wgl.t1);
  // console.log(wgl.t1);
  wgl.t2 = shadechange(wgl.t2);
  wgl.t3 = shadechange(wgl.t3);
  wgl.tint(wgl.t1, wgl.t2, wgl.t3);
  // wgl.tint(255, 153, 204);
  wgl.texture(img);
  wgl.box(125);
  wgl.pop();

  image(wgl, 0, 0, 500, 500);
}//end wglfunction

function sidebutton(){
  // automate later
  wgl.stroke(0);
  wgl.push();
  wgl.translate(-200, 100 + x1, 0);
  wgl.fill(230, 163, 63);
  wgl.box(50);
  wgl.pop();


  wgl.push();
  wgl.translate(200, 0 + x1, 0);
  wgl.fill(230, 163, 63);
  wgl.box(50);
  wgl.pop();

  wgl.push();
  wgl.translate(200, 100 + x1, 0);
  wgl.fill(230, 163, 63);
  wgl.box(50);
  wgl.pop();

  wgl.push();
  wgl.translate(-200, 0 + x1, 0);
  wgl.fill(230, 163, 63);
  wgl.box(50);
  wgl.pop();
}

function wglbg(){
  wgl.clear();
  wgl.noStroke();
  // wgl.background(0, 10, 30);
  wgl.push();
  // wgl.tint(50, 50, 50);
  wgl.texture(strs);
  wgl.translate(-100, -200, -210);
  wgl.plane(1000);
  wgl.pop();

  wgl.push();
  // wgl.tint(255, 75, 231);
  wgl.texture(wb);
  wgl.translate(0, 0, -200);
  wgl.plane(500);
  wgl.pop();


  wgl.push();
  wgl.tint(wgl.t1, wgl.t3, wgl.t2);
  wgl.translate(0,160, 0);
  wgl.texture(cat);
  wgl.box(400, 70, 170);
  wgl.pop();
}//end bg

function testmouse(){
	// fill(255);
  fill(100, 75);
  curg = 1;
	if(mouseX > 130 && mouseX < 370){
		if (mouseY > 130 && mouseY < 370){
      curg = 20;
			// fill(0, 50);
		}
	}
	// stroke(0);
	// rect(  130, 130, 240, 240);
  // rect(130, 130, 240, 240);

}//end testmouse

function mouseClicked(){

  for (var i = 0; i < block.length; i++) {
    block[i].click();
  }
  if(mouseX > 130 && mouseX < 370){
    if (mouseY > 130 && mouseY < 370){
      clk += 2;
    }
  }
}

// function shadechange(sc){
// 	var adjust=random(0, adjvar);
// 	var flip=random(0, 10);
//
// if ( sc >= 255 ){
// 	if ( sc <= 0){
// 		sc += adjust;
// 	} else {
// 		sc -= adjust;
// 	}
// } else {
// 	if(flip > 5){
// 		sc += adjust;
// 	}else{
// 		sc -= adjust;
// 	} //end if
// }
// return sc;
// // console.log("sc" + adjust);
// }//end shadechange


function adjres(){

  if (pixs < resolushin)
  {
    pixs = millis() / 100;
    // console.log(pixs);
    var p = 0.01 * pixs;
    pixelDensity(p);
  }
}//end adjres

function link(url, winName, options){
  winName && open(url, winName, options) || (location = url);
}//end

function moveadjust(){
  // var x1 = 0;
  // // this.x1 = 0;
  // let x1s = x1 + 5;
  // let x2s = x1 - 5;
// console.log('am I doing it');
  // var thisx = 0;
  //add wobble to the UFO's flight path by lerping between 2 numbers to add/subtract to the speed
  // this.x1 = 0;
  // this.x1start1 = this.x1 + 5;
  // this.x1start2 = this.x1 - 5;
  // this.flightdir = true;
  //if this.x1 is between 40 and 45, false
  if (x1 < x1s - 1 && x1 > x1s - 2){
    // console.log('false');
    flip = false;
  }
  else if (x1 < x2s + 2){
    flip = true;
    // console.log('true');
  }//else if it's less then -40, true

  //console.log(flip);
  if (flip == false){
    x1= lerp(x1, x2s, 0.05);
    // x1+= this.speed;
    // console.log('lerp1')
  }
  if (flip == true)
  {
    x1= lerp(x1, x1s, 0.05);
    // console.log('lerp2');
  }



}//end moveadjust
