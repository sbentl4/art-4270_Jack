// let img;
// let sized;
// let nsize1, nsize2;
// let r = 100;
// let g = 100;
// let b = 100;
// let fg;
//
// var t1;
// function preload() {
//   img = loadImage('assets/b.jpg');
//   fg = loadImage('assets/e2.png');
// }
// function windowResized(){
//   sized = windowWidth + (windowWidth * 0.2);
//   nsize = windowWidth;
//   nsize2 = windowHeight;
//   resizeCanvas(windowWidth, windowHeight);
// }
//
// function setup() {
//   nsize = windowWidth;
//   nsize2 = windowHeight;
//   sized = windowWidth + (windowWidth * 0.4);
//   createCanvas(windowWidth, windowHeight, WEBGL);
//
// }
//
// function draw() {
//   noStroke();
//   background(0);
//   rotateZ(frameCount * 0.01);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   //pass image as texture
//
//   r = shadechange(r);
//   // console.log(r);
//   g = shadechange(g);
//   b = shadechange(b);
//   tint(r, g, b);
//   texture(img);
//   box(sized);
//   rotateZ(frameCount * -0.01);
//   rotateX(frameCount * -0.01);
//   rotateY(frameCount * -0.01);
//   torus(sized * 0.3);
//
//
// }
let img;
let sized;
let nsize1, nsize2;
let r = 100;
let g = 100;
let b = 100;
let fg;

var t1;
let mb;
let globalTime = 0;
// let tmb;
function preload(){
  // mb = loadImage('assets/marble1.jpg');
  // mb = createImg('assets/marble.png');
  // tmb = loadImage('assets/marble.png');
     img = loadImage('assets/b.jpg');

}
 function setup(){
   // tiler(mb, 10, 'marble');
 }
//unsure if the stuff above may be problematic later
let sketchcanv = function(cv){
  let x = 100;
  let canv;

  cv.setup = function(){

    canv = cv.createCanvas(400, 400);
    // canv.parent('canvas-test');
  };
  cv.draw = function(){
    cv.background(100);
    cv.fill(255);
    cv.rect(0, 0, x, x);
  };
};


//BG==============================================================
let sketch = function(background){
  let wW = background.windowWidth;
  let wH = background.windowHeight;
  var fbc;
  // let marble;

  // let fbc;
  background.windowResized = function(){
    background.resizeCanvas(wW, wH, WEBGL);
    // let wW = background.windowWidth;
    // let wH = background.windowHeight;
    // fbc.position(0,0);
    // fbc.style('z-index','-1');
  };
  background.preload = function(){
    // background.marble = createImg('assets/marble.png');
    // background.marble.hide();

  };

  background.setup = function(){
    fbc = background.createCanvas(wW, wH, WEBGL);
    fbc.position(0,0);
    fbc.style('z-index','-1');

  };
  background.draw = function(){
    wW = background.windowWidth;
    wH = background.windowHeight;
    background.background(150);
    // background.image(background.marble, 0, 0);
    background.fill(100);
    // background.rect(100, 100, 50, 50);
    // wobb(background.marble, background);

      background.noStroke();
      // // background(0);
      // background.rotateZ(frameCount * 0.01);
      // background.rotateX(frameCount * 0.01);
      // background.rotateY(frameCount * 0.01);
      //pass image as texture

      // r = shadechange(r);
      // console.log(r);
      // g = shadechange(g);
      // b = shadechange(b);
      // tint(r, g, b);
      background.texture(img);
      background.box(sized);
      background.rotateZ(frameCount * -0.01);
      background.rotateX(frameCount * -0.01);
      background.rotateY(frameCount * -0.01);
      background.torus(sized * 0.3);
  };
};
let testcanv = new p5(sketchcanv);
let fullbg = new p5(sketch);

function draw(){
  fullbg.draw();
}
