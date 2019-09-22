var globalTime=0;
var img, img2;
var ctx;
let canv, canv2;
var canx = 200;
var cany = canx;
var maxcount = 270;
var ch = cany;

let vgl;

function preload(){
  img = createImg('assets/b.jpg');
  img2 = loadImage('assets/b.jpg');
  img.hide();
}
function setup(){
  // console.log('test');
  // canv2 = createCanvas(500, 500);
  canv2 = createGraphics(500, 500);
  canv= createGraphics(canx, cany);
  vgl = createCanvas(400, 400, WEBGL);
  ctx= canv.drawingContext;
  ctx.setTransform(1,0,0,1,0,0); // reset transform
}

function draw(){
  background(100);
  wobb(img, canv);
  // wob.wobble(globalTime);
  push();
  translate(-200, -200, 0);
  image(canv, 0, 0, 400, 400);
  pop();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(50);
  pop();
  // ctx.clearRect(20, 20, 150, 100);
  // ctx.rect(20, 20, 150, 100);
  // ctx.stroke();
  // image(img, 0, 0, 20, 20);

}//end draw
