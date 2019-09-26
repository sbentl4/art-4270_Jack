let wb;
function setup(){
  wb = createGraphics(400, 400, WEBGL);
}
let sketcht = function(t) {
  let x = 100;

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
  };
}//end t
let threed = new p5(sketcht);
