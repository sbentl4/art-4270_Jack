let mb;
let globalTime = 0;
// let tmb;
function preload(){
  // mb = loadImage('assets/marble1.jpg');
  // mb = createImg('assets/marble.png');
  // tmb = loadImage('assets/marble.png');

}
 function setup(){
   // tiler(mb, 10, 'marble');
 }
//unsure if the stuff above may be problematic later
let sketcht = function(bg){
  let wW = bg.windowWidth;
  let wH = bg.windowHeight;
  let x = 100;
  // let bgc;

  bg.setup = function(){
    let bgc = bg.createCanvas(400, 400);
    bgc.parent('canvas-test');
  };
  bg.draw = function(){
    bg.background(100);
    bg.tint(0, 100, 100);
    bg.fill(255);
    bg.rect(0, 0, x, x);
  };
};


//BG
let sketch = function(background){
  let wW = background.windowWidth;
  let wH = background.windowHeight;
  var fbc;
  let marble;

  // let fbc;
  background.windowResized = function(){
    background.resizeCanvas(wW, wH);
    // fbc.position(0,0);
    // fbc.style('z-index','-1');
  };
  background.preload = function(){
    background.marble = createImg('assets/marble.png');
    background.marble.hide();

  };

  background.setup = function(){
    fbc = background.createCanvas(wW, wH);
    fbc.position(0,0);
    fbc.style('z-index','-1');

  };
  background.draw = function(){
    wW = background.windowWidth;
    wH = background.windowHeight;
    background.background(150);
    background.image(background.marble, 0, 0);
    background.fill(0);
    // background.rect(100, 100, 50, 50);
    wobb(background.marble, background);
  };
};
let testcanv = new p5(sketcht);
let fullbg = new p5(sketch);
