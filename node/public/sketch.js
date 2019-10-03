// console.log('Hello!');
var socket;

function setup (){
  createCanvas(400, 400);
  background(0);
  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing);
}

function newDrawing(data) {
  fill(0, 100, 100);
  rect(data.x, data.y,data.x, data.y);
}

function mouseDragged() {
  // console.log(mouseX + ',' + mouseY);

  var data= {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);//names it

  fill(255);
  rect(mouseX, mouseY,mouseX, mouseY);
}

function draw(){
  // mouseDragged();
}
