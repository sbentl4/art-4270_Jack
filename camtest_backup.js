let img;
let sized;
let nsize1, nsize2;
let r = 100;
let g = 100;
let b = 100;
let fg;

var t1;
function preload() {
  img = loadImage('assets/b.jpg');
  fg = loadImage('assets/e2.png');
}
function windowResized(){
  sized = windowWidth + (windowWidth * 0.2);
  nsize = windowWidth;
  nsize2 = windowHeight;
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  nsize = windowWidth;
  nsize2 = windowHeight;
  sized = windowWidth + (windowWidth * 0.4);
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  noStroke();
  background(0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //pass image as texture

  r = shadechange(r);
  // console.log(r);
  g = shadechange(g);
  b = shadechange(b);
  tint(r, g, b);
  texture(img);
  box(sized);
  rotateZ(frameCount * -0.01);
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  torus(sized * 0.3);


}
