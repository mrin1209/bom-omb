class Word {
  upperRight(text,color,x,y,event = null) {
    let font = loadFont('asset/font/Minecraft.ttf');
    let bbox = font.textBounds('p5*js', 31, 53, 15);
    rect(bbox.x, bbox.y, bbox.w, bbox.h);
    fill(color);
    textFont(font);
    text(text, x, y);
  }

  upperLeft() {
  }

  lowerRight() {
  }

  lowerLeft() {
  }

}