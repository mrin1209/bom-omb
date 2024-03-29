class Play extends Default {
  panCount = 0;
  speed = 0.5;

  // 画像読み込み
  preload() {
    this.room = loadModel("../asset/model/room.obj");
  }

  setup() {
    polygon.onPolygon();
    this.cam = createCamera();
    camera(0, -260, 690);
    this.cam.tilt(-18);
  }

  // シーン描画時に実行
  view() {
    background(0);
    pointLight(255, 255, 0, 0, -450, -100);
    scale(100);
    model(this.room);
  }

  controller() {
    if (mouseIsPressed) {
      if (this.clicked) {
        if (this.pan = this.clickedPosition - mouseX < 0 && this.panCount < 10) {
          this.pan = this.speed;
          this.panCount += this.speed;
        } else if (this.pan = this.clickedPosition - mouseX > 0 && this.panCount > -10) {
          this.pan = -this.speed;
          this.panCount -= this.speed;
        }
        this.cam.pan(this.pan);
        this.clickedPosition = mouseX;
      } else {
        this.clicked = true;
      }
    } else {
      this.clicked = false;
    }
  }
}