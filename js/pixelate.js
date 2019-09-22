//Pixelate.js created by Joe Carlson Copyright 2015 - for non-commercial use only
// To Use: just plug in a website on the page and hit submit! Easy!


// Grab the Canvas and Drawing Context
// var canvas = document.getElementById('canvas');
var canvas;
var ctx;
var timer = 0;
var chck= 0;
// var ctx = canvas.getContext('2d');
var scl = 10;
var sclt = 0.01;
// Create an image element
var img = new Image();
var imgURL = 'assets/lilBub.jpg';

//When the page first loads - draw the initial demo image
function setup(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
// var initialImageURL = 'assets/lilBub.jpg';
// draw2(initialImageURL);
}

//takes any image URL and creates an un pixelated image /4 the orginal size of the image
// function draw (imgURL) {
function draw () {
  // console.log(timer);
  if (timer < scl)
  {
    timer = (millis() / 200);
    sclt = timer;
  }
    // Specify the src to load the image
  img.src = imgURL;

  canvas.height = img.height/scl;
  canvas.width = img.width/scl;
  pixelate();





}// end draw





//=================================
function pixelate() {
    //dynamically adjust canvas size to the size of the uploaded image
    canvas.height = img.height;
    // console.log(img.height * 5);
    canvas.width = img.width;

    /// if in play mode use that value, else use slider value
    var size = (sclt) * 0.01;

        /// cache scaled width and height
        w = canvas.width * size,
        h = canvas.height * size;
        // console.log(w);
        // console.log(canvas);


    /// draw original image to the scaled size
    ctx.drawImage(img, 0, 0, w, h);

    /// then draw that scaled image thumb back to fill canvas
    /// As smoothing is off the result will be pixelated
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
}
