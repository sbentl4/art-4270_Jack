
function shadechange(sc){
  // console.log(sc);
  var adjvar = 4;
	var adjust=random(0, adjvar);
	var flip=random(0, 10);
  // console.log(flip);
  if ( sc >= 255 ){
  	if ( sc <= 0){
  		sc -= adjust;
  	} else {
  		sc += adjust;
  	}
  } else {
    // sc -= adjust;
    if(flip > 5){
      	sc += adjust;
      }else{
        	sc -= adjust;
        } //end if

  }//end else
  // console.log(sc);
  return sc;
}
