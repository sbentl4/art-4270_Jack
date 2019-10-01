let wb;
function setup(){
  wb = createGraphics(400, 400, WEBGL);
}
let sketcht = function(t) {
  let x = 100;
  // let wh = t.windowHeight;
  // let ww = t.windowWidth;

  t.setup = function(){
    t.createCanvas(400, 400);
    // t.background(0);
    // wb = t.createGraphics(400, 400, WEBGL);

    // ctx = wb.drawingContext;
  };

  t.draw = function(){
    t.clear();
    t.fill(255);
    t.rect(x, x, 50, 50);
    t.wbset();
    t.image(wb, 0, 0, 100, 100);

  };

  t.wbset = function(){
    wb.background(0, 50);
    wb.push();
    wb.translate(0, mouseX, mouseY, 0);
    wb.box(50);
    wb.pop();
  }
}//end t

//===============================================
let back = function(background){
  let wW = background.windowWidth;
  let wH = background.windowHeight;
  var fbc;
  let boxt;
  let boxes = [];
  let boxi = 30;
  let boxj = 20;
  let boxs = 10;

  // let fbc;
  background.windowResized = function(){
    background.resizeCanvas(wW, wH);
  };

  background.preload = function(){
  };

  background.setup = function(){
    let k = 0;
    fbc = background.createCanvas(wW, wH, WEBGL);
    fbc.position(0,0);
    fbc.style('z-index','-1');
    // boxt = new boxcube(50, 10, 10, background);
    for (var i = 0; i < boxi; i++) {

      for (var j = 0; j < boxj; j++) {
        boxes[boxes.length++] = new boxcube(boxs, (i * boxs), (j * boxs), background);
        // console.log("i: " + i * 10 + ", j: " + j * 10);
      }
    }

  };
  background.draw = function(){
    background.clear();
    wW = background.windowWidth;
    wH = background.windowHeight;
    background.background(100, 0, 0, 100);
    background.fill(50);
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].display();
    }
    // boxt.display();
    // background.rect(100, 100, 50, 50);
    // console.log(boxes.length);
  };
};
//===============================================
let threed = new p5(sketcht);
let bg = new p5(back);

function boxcube(size, x, y, ctx){
  this.size = size;
  this.x = x;
  this.y = y;
  this.display = function(){
    ctx.push();
    ctx.translate(this.x, this.y);
    ctx.box(this.size);
    ctx.pop();
  };//end

  this.hover = function(){

  }
}
