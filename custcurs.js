function custcurs (curimg){
  // let tracker;
  let curtxt;
  // let curtxt = curimg[tracker] + ", auto";
  if (curimg.constructor == Array)
{
  // console.log("dog");
  if(tracker > curimg.length - 1)
  tracker = 0;
  // console.log(tracker);
  curtxt = curimg[tracker] + ", auto";
  tracker++;
  }else {
  curtxt = curimg + ", auto";
}

  // console.log(curtxt);
      // document.getElementById("defaultCanvas0").style.cursor = "pointer";
      document.getElementById("defaultCanvas0").style.cursor = curtxt;

}