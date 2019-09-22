// var image = new Image();
// image.src = "assets/b.jpg";
const RESIZE_DEBOUNCE_TIME = 100;
var w,h,cw,ch,canvas,ctx,createCanvas,resizeCanvas,setGlobals,globalTime=0,resizeCount = 0;
var img;
var img2;
var iw,ih;
var ctx;
var canv;
var canx = 800;
var cany = 800;
var rstep = 0;
var y = 0;
var yh = 0;
var pixs = 1;
var baseres = 0.5;
var resolushin = baseres * 3;
var divid = resolushin;
var counter = 0;
var maxcount = 270;
// var cH = canx;
var ch = cany;
var step = 1/ cany; //0.00125
// var step = 1/5;
var istep = ih / cany;
// var step = 1/ cany;           //set 'steps' - 1 divided by the height; so like, 0.125
// var istep = ih / cany;        //these divide
var ch = cany / divid;
// console.log ('Cany: ' + cany + ' Divid: ' + divid);
// console.log(cany/divid);
// console.log(istep);
function preload(){
  img = loadImage('assets/b2.jpg');
  // img = createImg('assets/b2.jpg');
  img2 = createImg('assets/b2.jpg');
  // img.elt.height = cany;
  img2.hide();
  console.log(img2.elt);//.elt is the image's element
  // console.log(img.elt.height);
}
function setup(){
  ih = img.height;
  iw = img.width;
  // createCanvas(ih, iw);
  // console.log('divi: '+ (canx / divid) +',' + (cany / divid));
  // canv= createCanvas((canx / divid), (cany / divid));
  canv = createCanvas( ih, iw);
  ctx= canv.drawingContext;
  ctx.setTransform(1,0,0,1,0,0);
  // ctx.msImageSmoothingEnabled = false;
  // ctx.mozImageSmoothingEnabled = false;
  // ctx.webkitImageSmoothingEnabled = false;
  // ctx.imageSmoothingEnabled = false;
  // ctx.drawImage(img,400,400,400,100,0,0,300,300);
  // image(img,//  WORKS
  //   0, 200,
  //   800,200,//
  //   0, 200,
  //   0, 200,
  // );



  //================================
  for(var i = 0 ;i < 1; i += step){
    // console.log(i);
    // text(i, 0, 1000 * i);
      // image(img,
      // image(img,//  WORKS
      //   0, i * cany,
      //   800,i * cany,//
      //   0, i * cany,
      //   0, i * cany,
      // );
      //   0, i * ch,
      //   800,i * step,//
      //   0, i * ch,
      //   800, 800*i,
      // );
      // image(img, 0, 0, 800, 800);
      // fill(0, i * 50);
      // rect(0, 0, 80, 800);


      // image( img,
        // 0, i*ch*0.5,//destination 0, height
        // 800, 800,//width/height of destination rectangle
      // wide, y,//clip x and y
      // wide*2,yh,//width and height of clip area
    // );

      // image, clipstart, clipstart, widthclip heightclip, canvasx, canvasy, width, height
      // ctx.drawImage(img.elt, wide, y, iw-wide*2, yh, 0, i*cH, canvas.width, step*cH);
  }//end for
//========================================


}

function draw(){
    // pixls();
    // pixelate();
    ctx.setTransform(1,0,0,1,0,0); // reset transform
    // ctx.globalAlpha = 1;           // reset alpha





    // rect(0, 0, (800), (800));
    // var curve = 1;
    // var curve2 = 1;
    // var curve3 = 1;
    // var curve4 = 1;
    //
    var curve = Math.cos(counter / 50);
    var curve2 = Math.sin(counter /117) + 1.4;
    var curve3 = Math.sin(counter /43.4) * 3.11;
    var curve4 = Math.tan(counter / 214) * 2.513;

    // var wave = 4/(Math.PI * 1);
    // var wave1 = curve2/(Math.PI * 1);


    //===========
    var curve = Math.sin(counter /10) + 1.2;
    var curve2 = Math.sin(counter /217) + 1.4;
    var curve3 = Math.sin(counter /53) * Math.PI;
    var curve4 = (Math.sin(counter /31) + 1.1) * Math.PI;
    var wave = 4/(Math.PI * 1);
    var wave1 = curve2/(Math.PI * 1);

    ctx.drawImage(img2.elt,
      0, 0,
      800, 800,
      0, 0,
      800, 800);
for (var i = 0; i <2; i++) {

    // for(var i = 0 ;i < 1; i += step){
        var wob = Math.sin(i * wave);
        var wide =  (Math.sin(i * wave1 * 3+curve3) + 1.0)*100;
        // console.log(iw-wide + ',' + wide);
        y = easeInOut(wob,curve);
        yh =easeInOut( easeInOut(wob+step,curve),curve2);
        y *= ih;
        yh *= ih;

        // ctx.drawImage(img2.elt,
        //   wide, y,
        //   iw-wide*2, yh,
        //   0, i*ch,
        //   800, 800);

        image(img2,
          0,i*ch,
          canvas.width,step*cH,
        wide, y ,
        iw-wide*2 ,yh,
        );
//=================
        // image(img,//  WORKS
        //   0, i * cany,
        //   800,i * cany,//
        //   iw-wide*2, i * cany,
        //   wide, i * cany,
        // );
        //==========
// image(img,
//   0, i * ch * 0.5,
//   800, 600,//leave,
//   800, i * ch,
//   wide*2, yh,
// );


        // image( img,
          // 0, i*ch*0.5,//destination 0, height
          // 800, 800,//width/height of destination rectangle
        // wide, y,//clip x and y
        // wide*2,yh,//width and height of clip area
      // );
        // ctx.drawImage(img.elt,
          // wide,y,//x y start clipping
          // iw-wide*2,yh, //width/height of cliped image
          // 0,i*ch * 1.5,//place image x y
          // canx,step*cany );//width/height of image to use


        // ctx.drawImage(img.elt,400,400,400,100,0,0,800,800);
        // ctx.drawImage(img.elt,wide,y,iw-wide*2,yh,0,i*ch,canvas.width,step*ch);
        // ctx.drawImage(img.elt,wide, y, iw-wide*2, yh, 0,i*ch, (canvas.width * resolushin),(canvas.height * resolushin));
        // background(0);

        // image, clipstart, clipstart, widthclip heightclip, canvasx, canvasy, width, height
        // ctx.drawImage(img.elt, wide, y, iw-wide*2, yh, 0, i*cH, canvas.width, step*cH);
    }//end for

        // ctx.drawImage(img.elt,0,0,1600,1600,0,0,800,800);

  ctx.rect(0, 0, (8), (80));
  // image( img, 0, 0, 100, 100);
  ctx.stroke();
  counter++;
  if(counter >= maxcount){
    counter = 0;
  }
  // console.log(counter);
}//end draw






var easeInOut = function (x, pow) {
  // console.log(Math.pow(x,pow));
    x = x < 0 ? 0 : x > 1 ? 1 : x; // clamp x
	var xx = Math.pow(x,pow);
  // return x;
	return xx / (xx + Math.pow(1 - x, pow));
}


function pixls(){
  if (pixs < (resolushin * 100))
  {
    pixs = counter / 100;
    // console.log(pixs);
    if (pixs > resolushin * 100){
      pixs = resolushin * 100;
    }
    var p = 0.01 * pixs;
    pixelDensity(p);
    console.log(pixs);
  }
}

function pixelate() {
  // var canv2 = canv;
  // console.log(canv);
  // var ctx2 = canv2.getContext('2d');
  // ctx= canv.drawingContext;
    //dynamically adjust canvas size to the size of the uploaded image
    canv.height = canx;
    canv.width = cany;

    /// if in play mode use that value, else use slider value
    var size = (100) * 0.01;

        /// cache scaled width and height
        w = canv.width * size,
        h = canv.height * size;

    /// draw original image to the scaled size
    ctx.drawImage(img.elt, 0, 0, w, h);

      // ctx.drawImage(img.elt,0,0,1600,1600,0,0,w,h);


    /// then draw that scaled image thumb back to fill canvas
    /// As smoothing is off the result will be pixelated
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
}
