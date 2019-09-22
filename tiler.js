function tiler(tileimg, tiles, name){
  // let tilegraphic = createGraphics(tileimg.width, tileimg.height);

  tilegraphic = createGraphics(tileimg.width * tiles, tileimg.height * tiles);
  for (var i = 0; i < tiles; i++) {
    // console.log(i);
    for (var j = 0; j < tiles; j++) {
      tilegraphic.image(tileimg, tileimg.width * i, tileimg.width * j);

    }
  }//end for
  tilegraphic.save(name + '.png');

}//end func
