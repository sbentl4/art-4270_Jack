let img;
let sized;
let nsize1, nsize2;
let r = 100;
let g = 100;
let b = 100;
// let wH = windowHeight;
// let wW = windowWidth;
let fg;
// let cnv;
let gl;
let ctx;
let oc;

var t1;

var x1 = 0;
// this.x1 = 0;
let x1s = x1 + 5;
let x2s = x1 - 5;
var flip = true;

function preload() {
  img = loadImage('assets/b.jpg');
  fg = loadImage('assets/e2.png');
  oc = loadImage('assets/ocean3.gif');
}
function windowResized(){
  sized = windowWidth + (windowWidth * 0.3);
  // nsize = windowWidth;
  // nsize2 = windowHeight;
  resizeCanvas(windowWidth, windowHeight);
  // ctx = drawingContext;
}

function setup() {
  sized = windowWidth * 1.4;
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0,0);
  ctx = cnv.drawingContext;
  gl = createGraphics(windowWidth, windowHeight, WEBGL);
  frameRate(60);
  //60?
  //consistency between computers
  //modulo


}

function draw() {
    moveadjust();
    // console.log(x1);
  gl.noStroke();
  background(0);
  tint(0, 100, 100);
  // image(img, 0, 0);
  gl.background(0);
  noTint();
  // //Adjust
  // let fvar = frameCount % 0.005;
  // let fvar = second() / 10;
  let fvar = 0.01;
  // console.log(fvar);
  gl.rotateZ(fvar);
  gl.rotateX(fvar);
  gl.rotateY(fvar);
  //pass image as texture

  // // console.log(r);
  r = shadechange(r);
  g = shadechange(g);
  b = shadechange(b);
  gl.tint(r, g, b);
  gl.texture(img);
  gl.box(sized);
  gl.rotateZ(fvar);
  gl.rotateX(fvar);
  gl.rotateY(-fvar);
  gl.torus(sized * 0.3);
  // gl.lightFalloff(-1, -100, 0);
  // gl.pointLight(250, 250, 250, 0);
  // pointlight();
  image(gl, 0, 0);//DONT TINT
  tint(125 + (r/2),125 + (g/2),125 + (b/2),);
  image(oc, 0, 0, (windowWidth * 1.2) + x1 * 3, (windowHeight * 1.05) + x1 );
  // image(oc, 0 + x1 * 2, (windowHeight/8)+ x1* 2, windowWidth * 1.5, windowHeight * 1.05);


  // image(oc, -windowWidth*2, windowHeight/2, windowWidth*3, windowHeight/2);
  // tint(125 + (r/2),125 + (g/2),125 + (b/2),);

  image(fg, 0, 0, windowWidth, windowHeight);


}


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
