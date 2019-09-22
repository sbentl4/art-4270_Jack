// var image = new Image();
// image.src = "assets/b.jpg";
const RESIZE_DEBOUNCE_TIME = 100;
var w,h,cw,ch,canvas,ctx,createCanvas,resizeCanvas,setGlobals,globalTime=0,resizeCount = 0;
var img;
var img2
var iw,ih;
var ctx;
var canv;
var canx = 300;
var cany = canx;
let canv2;
var counter = 0;
var maxcount = 270;
var step = 1/ cany;
var istep = ih / cany;
var rstep = 0;
var y = 0;
var yh = 0;
var cH;
var ch = cany;
var scl = 10;
var sclt = 0.01;
var tim2 = 0;
var c2w, c2h;
function preload(){
  img = createImg('assets/b.jpg');
  img2 = loadImage('assets/b.jpg');
  // ih = img.elt.height;
  // iw = img.elt.width;
  img.hide();
  // console.log(img.elt);//.elt is the image's element
  // console.log(img.elt.height);
}
function setup(){
  // console.log('test');
  canv2 = createCanvas(500, 500);
  canv= createGraphics(canx, cany);
  // pixelDensity(0.3);
  // canv2.pixelDensity(9);
  // canv.elt.width = canx;
  ctx= canv.drawingContext;
  iw = img.elt.width;
  ih = img.elt.height;
  // console.log(img2);
  console.log(canv);
  ctx.setTransform(1,0,0,1,0,0); // reset transform

  // iw = img2.width;
  // ih = img2.height;
  // ctx.drawImage(img,400,400,400,100,0,0,300,300);
}

function draw(){

  // console.log(canvas);

  // ctx.setTransform(1,0,0,1,0,0); // reset transform
  // ctx.globalAlpha = 1;           // reset alpha
  // pixelDensity(0.1);

    wobb(img, cany, ctx, globalTime);
    // cH = cany;
    // console.log(canvas);
//     var curve = Math.sin(globalTime /1020) + 1.2;
//     var curve2 = Math.sin(globalTime /2217) + 1.4;
//     var curve3 = Math.sin(globalTime /533) * Math.PI;
//     var curve4 = (Math.sin(globalTime /731) + 1.1) * Math.PI;
//     var wave = 4/(Math.PI * 1);
//     var wave1 = curve4/(Math.PI * 1);
//     // pixelate();
//     for(var i = 0 ;i < 1; i += step){
//         var wob = Math.sin(i * wave);
//         var wide =  (Math.sin(i * wave1 * 3+curve3) + 1.0)*100;
//         // y = 400;
//         y = easeInOut(easeInOut(wob,curve),curve2);
//         yh =easeInOut( easeInOut(wob+step,curve),curve2) - y;
//         y *= ih;
//         yh *= ih;
//         // console.log(cH);
//
//         // ctx.drawImage(img.elt,400,400,400,100,0,0,300,300);
//         // console.log(ih);
//         // image(img2,
//         //
//         //   0,i*ch,
//         //   800,step*cH,//width/height of destination
//         // wide, y ,
//         // iw-wide*2 ,yh,
//         // );
//
// //USE THIS
//         // ctx.drawImage(img.elt,
//         //   //p1 source
//         //   wide, y,//x/y
//         //   iw-wide*2 ,yh,//size
//         //   //p2 place
//         //   0,i*ch * (cany / 100),//x/y
//         //   ctx.canvas.width,step*cH * (cany / 100)//size
//         //   // console.log(canvas.elt);
//         // );
//
//         // ctx.drawImage(img.elt, wide, y, iw-wide*2, yh, 0, i*cH, canvas.width, step*cH);
//         //source,
//     }//end for

    canv2.background(100);
  // ctx.clearRect(20, 20, 150, 100);
  // ctx.rect(20, 20, 150, 100);
  // ctx.stroke();
  image(canv, 50, 50, 400, 400);
  image(img, 0, 0, 20, 20);

  if (tim2 < scl)
  {
    tim2 = (millis() / 200);
    sclt = tim2;
  }
  requestAnimationFrame(update);//updates animation
  counter++;
  if(counter >= maxcount){
    counter = 0;
  }
}//end draw

var easeInOut = function (x, pow) {
    x = x < 0 ? 0 : x > 1 ? 1 : x; // clamp x
	var xx = Math.pow(x,pow);
  // return x;
	return xx / (xx + Math.pow(1 - x, pow));
}


function update(timer){ // Main update loop
    globalTime = timer;
    // display();  // call demo code
    // requestAnimationFrame(update);
}//timer

//=================================
// function pixelate() {
//     //dynamically adjust canvas size to the size of the uploaded image
//     canvas.height = img.height;
//     // console.log(img.height * 5);
//     canvas.width = img.width;
//
//     /// if in play mode use that value, else use slider value
//     var size = (sclt) * 0.01;
//
//     /// cache scaled width and height
//     c2w = canvas.width * size,
//     c2h = canvas.height * size;
//
//     /// draw original image to the scaled size
//     // ctx.drawImage(img2, 0, 0, w, h);
//
//     /// then draw that scaled image thumb back to fill canvas
//     /// As smoothing is off the result will be pixelated
//     ctx.mozImageSmoothingEnabled = false;
//     ctx.imageSmoothingEnabled = false;
//     ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
// }
