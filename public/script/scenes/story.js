class Story extends Default {
  // 画像読み込み
  preload() {
    this.storyImg = loadImage("../img/story.jpg");
  }

  // シーン初期化時に実行
  setup() {
    this.blinkCount = 0;
  }

  // シーン描画時に実行
  view() {
    image(this.storyImg, 0, 0);

    if (this.blinkCount > 50) {
      this.blinkCount = 0;
    } else if (this.blinkCount > 25) {
      textAlign("right");
      fill(255,255,255);
      textSize(30);
      text("Touch", windowWidth - 20,windowHeight - 20);
    }
    this.blinkCount++;
    
    shader.fadein(10);
  }

  // 画面操作
  controller() {}
}