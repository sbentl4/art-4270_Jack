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
// let curs = "url('assets/corg.png')"
let handy = false;
let handys = false;
let crg = "url('assets/corg.png')";
let skel = [];
let ywc = [];
let skel2 = [];
let tracks = 0;
let tracks2 = 0;
let ywt = 0;
ywc[0] = "url('assets/yw/y1.png')";
ywc[1] = "url('assets/yw/y2.png')";
ywc[2] = "url('assets/yw/y3.png')";
ywc[3] = "url('assets/yw/y4.png')";
ywc[4] = "url('assets/yw/y5.png')";

skel[0] = "url('assets/skel/s0.png')";
skel[1] = "url('assets/skel/s1.png')";
skel[2] = "url('assets/skel/s2.png')";
skel[3] = "url('assets/skel/s3.png')";
skel[4] = "url('assets/skel/s4.png')";

skel2[0] = "url('assets/skel2/s1.png')";
skel2[1] = "url('assets/skel2/s2.png')";
skel2[2] = "url('assets/skel2/s3.png')";
skel2[3] = "url('assets/skel2/s4.png')";
skel2[4] = "url('assets/skel2/s5.png')";
skel2[5] = "url('assets/skel2/s6.png')";
skel2[6] = "url('assets/skel2/s7.png')";
skel2[7] = "url('assets/skel2/s8.png')";
skel2[8] = "url('assets/skel2/s9.png')";
skel2[9] = "url('assets/skel2/s10.png')";
skel2[10] = "url('assets/skel2/s11.png')";
skel2[11] = "url('assets/skel2/s12.png')";
skel2[12] = "url('assets/skel2/s13.png')";
skel2[13] = "url('assets/skel2/s14.png')";
skel2[14] = "url('assets/skel2/s15.png')";
skel2[15] = "url('assets/skel2/s16.png')";
skel2[16] = "url('assets/skel2/s17.png')";





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
  frameRate(60);
  // console.log(imgs);
  wb = createGraphics(canx, cany);
  // strs = createGraphics(imgs.width, imgs.height);

  ctxw = wb.drawingContext;

  block[0] = new Block("camtest.html", 150, 150, 200, 200, "");
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
  // let handys = false;
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


  // noCursor();
  // custcurs("url(assets/yw/y1.png)");

  // custcurs(skel[ywt]);
  // ywt++;
  // if(ywt > ywc.length)
  // ywt = 0;

  // custcurs(skel, tracks);

  moveadjust();
  // text('x1: ' + x1, 100, 100);
  for (var i = 0; i < block.length; i++) {
    var handys = block[i].curs(x1);
    fill(100, 75);
    // block[i].display();
    block[i].show();
    if (handys == true)
    {
      handy = true;
      // tracks2 = custcurs(skel2, tracks2);
    }
  }//end for

  if (handy == true){
    // console.log("handy true");
    tracks2 = custcurs(skel2, tracks2);
    handy = false;
  } else {
    // console.log("handy false");
    tracks = custcurs(skel, tracks);
  }

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
  wgl.translate(0,180, 0);
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
