export class Title {
  constructor() {
    this.loadImg();
  }

  #loadImg() {
    this._title = loadImage("img/title.jpg");
  }

  view() {
    image(this._title, 0, 0)
  } 
}