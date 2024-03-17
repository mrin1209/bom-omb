class Title {
  setup() {
    this.titleImg = loadImage("../img/title.jpg");
  }

  view() {
    image(this.titleImg, 0, 0, 390, 844);
  }
}

const title = new Title();