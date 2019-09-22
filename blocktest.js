function Block(url, x, y, wx, wy, txt){
  this.url = url;
  this.txt = txt;
  // this.winName = winName;
  this.wx = wx;
  this.wy = wy;
  this.x = x;
  this.y = y;
  this.handy = false;
  this.x1;
  this.modx = 0;
  this.mody = 0;
  this.display = function(){

    rect(this.x , this.y + this.x1 , this.wx, this.wy);
  }
  this.show = function(){
    if(this.x > 10){
      this.modx = 20;
    }
    if(this.y > 225)
    this.mody = 10;
    fill(0);
    
    text(this.txt, this.x + 10 + this.modx, (this.y + 20) + this.x1 + this.mody);
    // console.log(this.txt);
  }

  this.curs = function(x1){
    this.x1 = x1;
    if (mouseX > this.x && mouseX < (this.x + this.wx)){
      if (mouseY > this.y + this.x1 && mouseY < (this.y + this.x1 + this.wy)){
      // this.link();
      // cursor(HAND);
      this.handy = true;
      return this.handy;
      }//end if2
    }//end if

  }

  this.click = function(){
    console.log('clicked');
    if (mouseX > this.x && mouseX < (this.x + this.wx)){
      if (mouseY > this.y + this.x1 && mouseY < (this.y + this.x1 + this.wy)){
      this.link();
      // cursor('hand');

      }//end if2
    }//end if
  }//end click
  this.link = function() {
      // link("https://p5js.org", "p5.js");
      console.log('dog2');
      open(this.url) || (location = this.url);
      // winName && open(this.url, this.winName, this.options) || (location = this.url);
  }
}
