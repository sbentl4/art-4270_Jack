console.log('Hello!');
var socket;

function setup (){
  createCanvas(400, 400);
  background(0);
  socket = socket.io.connect('http://localhost:3000');
}
function draw(){
  fill(255);
  rect(mouseX, mouseY,mouseX, mouseY);
}
