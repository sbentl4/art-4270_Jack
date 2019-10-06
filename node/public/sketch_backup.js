// console.log('Hello!');
var socket;
var data;

function setup (){
  createCanvas(400, 400);
  background(0);
  socket = io.connect(self.location.host);
  console.log(self.location.host);
  socket.on('mouse', newDrawing);
}

function draw(){
  // background(0);
  fill(255);
  // rect(mouseX, mouseY,mouseX, mouseY);
  data= {
    nam: socket.id,
    x: mouseX,
    y: mouseY
  }
  socket.on('mousein', newDrawing);//names it
  socket.emit('mouse', data);//send
  text(socket.id, mouseX, mouseY);

}

function newDrawing(data) {
  // console.log('input');
  // background(0);
  fill(0, 100, 100);
  // rect(data.x, data.y,data.x, data.y);
  text(data.nam, data.x, data.y);
  // console.log(data);
}

// function mouseDragged() {
//   // console.log(mouseX + ',' + mouseY);
//
// }
