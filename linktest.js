let windowWidth = 800;
let windowHeight = 800;
let input = 800;
let block1, block2;
let block = [];
let handy = false;
function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.background(16);
    cnv.fill(31);
    // cnv.block = rect(10, 10, 100, 100);
    block[0] = new Block("https://p5js.org", 10, 10);
    block[1] = new Block("https://www.furaffinity.net", 120, 10);
    // cnv.block1 = new Block("https://p5js.org", 10, 10);
    // cnv.block2 = new Block("https://p5js.org", 100, 100);

    // cnv.block2 = new Block("https://furaffinity.net", "FA");
        // button = createButton('webpage');
    // button.position(windowWidth/2,windowHeight/2);
    // cnv.block = mousePressed(webpage);
    // cnv.block.position(400, 400);
}

function draw(){
  handy = false;
  cursor(ARROW);
  for (var i = 0; i < block.length; i++) {
    var handys = block[i].curs();
    block[i].display();
    if (handys == true)
      handy = true;
  }//end for
  if (handy == true)
  cursor(HAND);
}//END DRAW

function link(url){
  // winName && open(url, winName, options) || (location = url);
  open(url) || (location = url);
}//end

function webpage() {
    link("https://p5js.org", "p5.js");
}
function mousePressed(){
  for (var i = 0; i < block.length; i++) {
    block[i].click();
  }
  // console.log('dog');
  // cnv.block2.click();
}
