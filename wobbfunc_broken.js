function wobb(img, cany, ctx){
  this.img = img;
  this.step = 1 / cany;
  this.cH = cany;
  this.cv = ctx;
  // this.wobble();
  // console.log(canvas);
  this.wobble = function(time){
  this.y = 0;
  this.yh = 0;
  this.time = time;
  this.curve = Math.sin(this.time /1020) + 1.2;
  this.curve2 = Math.sin(this.time /2217) + 1.4;
  this.curve3 = Math.sin(this.time /533) * Math.PI;
  this.curve4 = (Math.sin(this.time /731) + 1.1) * Math.PI;
  this.wave = 4/(Math.PI * 1);
  this.wave1 = this.curve4/(Math.PI * 1);
  // pixelate();
    for(var i = 0 ;i < 1; i += this.step){
        this.wob = Math.sin(i * this.wave);
        this.wide =  (Math.sin(i * this.wave1 * 3+this.curve3) + 1.0)*100;
        // y = 400;
        this.y = this.easeInOut(this.easeInOut(this.wob,this.curve),this.curve2);
        this.yh =this.easeInOut( this.easeInOut(this.wob+this.step,this.curve),this.curve2) - y;
        this.y *= ih;
        this.yh *= ih;
        // console.log(this.cv.canvas.width);
        // this.cv.drawImage(this.img.elt,
        //   0, 0,
        //   this.cv.canvas.width, 300);
        this.cv.drawImage(this.img.elt,
          //p1 source
          this.wide, this.y,//x/y
          iw-this.wide*2 ,this.yh,//size
          //p2 place
          0,i*this.ch * (this.ch / 100),//x/y //right ch was cany
          this.cv.canvas.width,this.step*this.cH * (this.ch / 100)//size
          // console.log(canvas.elt);
          );

        // ctx.drawImage(img.elt, wide, y, iw-wide*2, yh, 0, i*cH, canvas.width, step*cH);
        //source,
    }//end for
  }//end wobble

  this.easeInOut = function (x, pow) {
    this.x = this.x < 0 ? 0 : this.x > 1 ? 1 : this.x; // clamp x
  	this.xx = Math.pow(this.x,pow);
    // return x;
  	return this.xx / (this.xx + Math.pow(1 - this.x, this.pow));
  }//end for

}//end fun
