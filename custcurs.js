function custcurs (curimg, trackthis){
  // trackthis = trackthis;
  // let tracker;
  let curtxt;
  // let curtxt = curimg[tracker] + ", auto";
  if (curimg.constructor == Array)
  {
    if(trackthis > curimg.length - 1)
      {
        trackthis = 0;
      }//end if
    curtxt = curimg[trackthis] + ", auto";
    trackthis++;
  }else {
    curtxt = curimg + ", auto";
  }//end else

  // console.log(curtxt);
      // document.getElementById("defaultCanvas0").style.cursor = "pointer";
      document.getElementById("defaultCanvas0").style.cursor = curtxt;
      // console.log(trackthis);
      return trackthis;

}//end func
