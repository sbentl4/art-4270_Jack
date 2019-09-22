// let globalTime = 0;
function wobb(img, canv){
  this.img = img;
  // this.iw = img.width;
  // this.ih = img.height;
  this.iw = img.elt.width;
  this.ih = img.elt.height;

  this.cH = canv.height;
  this.step = 1 / cH;
  this.cv = canv.drawingContext;
  this.time = globalTime;
  // console.log(canvas);
  this.curve = Math.sin(this.time /1020) + 1.2;
  this.curve2 = Math.sin(this.time /2217) + 1.4;
  this.curve3 = Math.sin(this.time /533) * Math.PI;
  this.curve4 = (Math.sin(this.time /731) + 1.1) * Math.PI;
  this.wave = 4/(Math.PI * 1);
  this.wave1 = this.curve4/(Math.PI * 1);
  this.y = 0;
  this.yh = 0;
  // pixelate();
  // this.cv.fill(200);
  // this.cv.drawImage(this.img.elt, 0, 0, 100, 100);
    for(var i = 0 ;i < 1; i += this.step){
        this.wob = Math.sin(i * this.wave);
        this.wide =  (Math.sin(i * this.wave1 * 3+this.curve3) + 1.0)*100;
        // y = 400;
        this.y = easeInOut(easeInOut(this.wob,this.curve),this.curve2);
        this.yh =easeInOut( easeInOut(this.wob+this.step,this.curve),this.curve2) - y;
        this.y *= this.ih;
        this.yh *= this.ih;
        // console.log(cH);
        this.cv.drawImage(this.img.elt,
          //p1 source
          this.wide, this.y,//x/y
          iw-this.wide*2 ,this.yh,//size
          //p2 place
          0,i*this.cH * (this.cH / 100),//x/y //right ch was cany
          this.cv.canvas.width,this.step*this.cH * (this.cH / 100)//size
          // console.log(canvas.elt);
        );
        // this.ease
        // ctx.drawImage(img.elt, wide, y, iw-wide*2, yh, 0, i*cH, canvas.width, step*cH);
        //source,
    }//end for
      requestAnimationFrame(update);//updates animation
}//end fun
function easeInOut(x, pow) {
    x = x < 0 ? 0 : x > 1 ? 1 : x; // clamp x
	var xx = Math.pow(x,pow);
  // return x;
	return xx / (xx + Math.pow(1 - x, pow));
}


function update(timer){ // Main update loop
    globalTime = timer;
}//timer
