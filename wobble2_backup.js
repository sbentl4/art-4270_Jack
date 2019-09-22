// var image = new Image();
// image.src = "assets/b.jpg";
const RESIZE_DEBOUNCE_TIME = 100;
var w,h,cw,ch,canvas,ctx,createCanvas,resizeCanvas,setGlobals,globalTime=0,resizeCount = 0;
var img;
var img2
var iw,ih;
var ctx;
var canv;
var canx = 500;
var cany = 500;
// var cH = canx;
var ch = cany;
function preload(){
  img = createImg('assets/b.jpg');
  img2 = loadImage('assets/b.jpg');
  // ih = img.elt.height;
  // iw = img.elt.width;
  img.hide();
  console.log(img.elt);//.elt is the image's element
  // console.log(img.elt.height);
}
function setup(){
  // console.log('test');
  canv= createCanvas(canx, cany);
  ctx= canv.drawingContext;
  // ctx.drawImage(img,400,400,400,100,0,0,300,300);
}

function draw(){
  ctx.setTransform(1,0,0,1,0,0); // reset transform
  ctx.globalAlpha = 1;           // reset alpha
  ctx.clearRect(0,0,w,h);
  // ctx.drawImage(img.elt, 0, 0);
  // if(image.complete){
    // console.log('test');
      // if(ih == undefined){
          ih = img.elt.height;
          iw = img.elt.width;
      // }
    // }
    var step = 1/ cany;
    var istep = ih / cany;
    var rstep = 0;
    var y = 0;
    var yh = 0;
    var cH = canvas.height;
    var curve = Math.sin(globalTime /1020) + 1.2;
    var curve2 = Math.sin(globalTime /2217) + 1.4;
    var curve3 = Math.sin(globalTime /533) * Math.PI;
    var curve4 = (Math.sin(globalTime /731) + 1.1) * Math.PI;
    var wave = 4/(Math.PI * 1);
    var wave1 = curve4/(Math.PI * 1);
    for(var i = 0 ;i < 1; i += step){
        var wob = Math.sin(i * wave);
        var wide =  (Math.sin(i * wave1 * 3+curve3) + 1.0)*100;
        // y = 400;
        y = easeInOut(easeInOut(wob,curve),curve2);
        yh =easeInOut( easeInOut(wob+step,curve),curve2) - y;
        y *= ih;
        yh *= ih;
        // console.log(cH);

        // ctx.drawImage(img.elt,400,400,400,100,0,0,300,300);
        // console.log(ih);
        image(img2,
          0,i*ch,
          canvas.width,step*cH,
        wide, y ,
        iw-wide*2 ,yh,
        );

        // ctx.drawImage(img.elt,
        //   //p1
        //   wide, y ,
        //   iw-wide*2 ,yh,
        //   //p2
        //   0,i*ch,
        //   canvas.width,step*cH
        // );
        // ctx= canv.drawingContext;
        // ctx.drawImage(image, 0, 0, 400, 400);
        // image, clipstart, clipstart, widthclip heightclip, canvasx, canvasy, width, height
        // ctx.drawImage(image, wide, y, 400, 400, 0, i*ch, canvas.width, canvas.height);
        // ctx.drawImage(img.elt, wide, y, iw-wide*2, yh, 0, i*cH, canvas.width, step*cH);
        //source,
    }//end for

  // background(0);
  // fill(100);
  // ctx.drawImage(img.elt, 0, 0);
  ctx.clearRect(20, 20, 150, 100);
  ctx.rect(20, 20, 150, 100);
  ctx.stroke();
  image(img, 0, 0, 20, 20);
  // console.log('Test2');
  // image(img, 0, 0);

  // image, clipstart, clipstart, widthclip heightclip, canvasx, canvasy, width, height
  // resizeCanvas();
  // window.addEventListener("resize",resizeCanvas);
  requestAnimationFrame(update);//updates animation

}//end draw

var easeInOut = function (x, pow) {
    x = x < 0 ? 0 : x > 1 ? 1 : x; // clamp x
	var xx = Math.pow(x,pow);
  // return x;
	return xx / (xx + Math.pow(1 - x, pow));
}
// function display(){  // put code in here
//     ctx.setTransform(1,0,0,1,0,0); // reset transform
//     ctx.globalAlpha = 1;           // reset alpha
//     ctx.clearRect(0,0,w,h);
//     if(image.complete){
//       // console.log('test');
//         if(ih === undefined){
//             ih = image.height;
//             iw = image.width;
//         }
//         // var mil = millis();
//         var step = 1/ canvas.height;;
//         var istep = ih / canvas.height;
//         var rstep = 0;
//         var y = 0;
//         var yh = 0;
//         var cH = canvas.height;
//         // var cH = canvas.height;
//         var curve = Math.sin(globalTime /1020) + 1.2;
//         var curve2 = Math.sin(globalTime /2217) + 1.4;
//         var curve3 = Math.sin(globalTime /533) * Math.PI;
//         var curve4 = (Math.sin(globalTime /731) + 1.1) * Math.PI;
//         var wave = 4/(Math.PI * 1);
//         var wave1 = curve4/(Math.PI * 1);
//         // var mil = millis()
//         for(var i = 0 ;i < 1; i += step){
//             var wob = Math.sin(i * wave);
//             var wide =  (Math.sin(i * wave1 * 3+curve3) + 1.0)*100;
//             y = easeInOut(easeInOut(wob,curve),curve2);
//             yh =easeInOut( easeInOut(wob+step,curve),curve2) - y;
//             y *= ih;
//             yh *= ih;
//             // ctx.drawImage(image, 0, 0, 400, 400);
//             // ctx.drawImage(image,400,400,400,100,0,0,300,300);
//             // image, clipstart, clipstart, widthclip heightclip, canvasx, canvasy, width, height
//             // ctx.drawImage(image, wide, y, 400, 400, 0, i*ch, canvas.width, canvas.height);
//             ctx.drawImage(image, wide, y, iw-wide*2, yh, 0, i*cH, canvas.width, step*cH);
//             //source,
//         }//end for
//
//     }//if image complete
// }//end display




function update(timer){ // Main update loop
    globalTime = timer;
    // display();  // call demo code
    // requestAnimationFrame(update);
}





// const RESIZE_DEBOUNCE_TIME = 100;
// var w,h,cw,ch,canvas,ctx,createCanvas,resizeCanvas,setGlobals,globalTime=0,resizeCount = 0;
// createCanvas = function () {
//     var c,cs; cs = (c = document.createElement("canvas")).style;
//     cs.position = "absolute";
//     cs.top = cs.left = "0px";
//     cs.zIndex = 1000;
//     document.body.appendChild(c);
//     return c;
//
// }

//Canvas resize
// resizeCanvas = function () {
//   // console.log('dog');
//     if (canvas === undefined) {
//         canvas = createCanvas();
//
//     }
//     //resize section for fullscreen
//     // canvas.width = window.innerWidth;
//     // canvas.height = window.innerHeight;
//     canvas.width = 400;
//     canvas.height = 400;
//     ctx = canvas.getContext("2d");
//     if (typeof setGlobals === "function") { setGlobals(); }
//     if (typeof onResize === "function"){
//         resizeCount += 1;
//         setTimeout(debounceResize,RESIZE_DEBOUNCE_TIME);
//
//     }
// }
// function debounceResize(){
//     resizeCount -= 1;
//     if(resizeCount <= 0){ onResize();}
// }
// setGlobals = function(){
//     cw = (w = canvas.width) / 2;
//     ch = (h = canvas.height) / 2;
// }

// resizeCanvas();
// window.addEventListener("resize",resizeCanvas);
// requestAnimationFrame(update);
