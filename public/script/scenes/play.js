class Play extends Default {
  panCount = 0;
  speed = 2;

  // 画像読み込み
  preload() {
    this.room = loadModel("../asset/model/room.obj");
  }

  setup() {
    polygon.onPolygon();
    this.cam = createCamera();
    camera(0, -260, 600);
    this.cam.tilt(-23);
  }

  // シーン描画時に実行
  view() {
    background(0);
    pointLight(255, 255, 0, 0, -450, 0);
    scale(100);
    model(this.room);
  }

  controller() {
    if (mouseIsPressed) {
      if (this.clicked) {
        console.log(this.panCount);
        if (this.pan = this.clickedPosition - mouseX < 0 && this.panCount < 10) {
          this.pan = this.speed;
          this.panCount += this.speed;
        } else if (this.pan = this.clickedPosition - mouseX > 0 && this.panCount > -10) {
          this.pan = -this.speed;
          this.panCount -= this.speed;
        }
        this.cam.pan(this.pan);
      } else {
        this.clicked = true;
        this.clickedPosition = mouseX;
      }
    } else {
      this.clicked = false;
    }
  }
}