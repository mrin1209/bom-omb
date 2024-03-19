class Story extends Default {
  // 画像読み込み
  preload() {
    this.storyImg = loadImage("../img/story.jpg");
  }

  // シーン初期化時に実行
  setup() {
    this.rotate = 0;
    this.scale = 1;
    this.x = 1;
  }

  // シーン描画時に実行
  view() {
    image(this.storyImg, 0, 0);

  }

  // 画面操作
  controller() {}
}