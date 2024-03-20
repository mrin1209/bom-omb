class Story extends Default {
  // 画像読み込み
  preload() {
    this.storyImg = loadImage("../img/story.jpg");
  }

  // シーン初期化時に実行
  setup() {
    this.blinkCount = 0;
    this.blinkStatus = 0;

    this.blinkColor = 0,0,0;
    this.blinkSpeed = 10;
    this.blinkView = 50;
    this.blinkHide = 5;
    this.topBlink = 255;
    this.bottomBlink = 50;

    setTimeout(() => {
      this.blinkStatus = 1;
      controller.click(this,this.viewTime);
    }, "2000"); 
  }

  destroy() {
    // gameクラスに現在時刻を送る
  }
  
  // シーン描画時に実行
  view() {
    image(this.storyImg, 0, 0);


    if (this.blinkStatus === 1) {
      fill(this.blinkColor,this.blinkCount);
      if (this.blinkCount >= this.topBlink) {
        this.blinkCount = 0;
        this.blinkStatus++;
      } else {
        this.blinkCount+=this.blinkSpeed;
      }
    } else if (this.blinkStatus === 2) {
      fill(this.blinkColor,this.topBlink);
      if (this.blinkCount >= this.blinkView) {
        this.blinkCount = this.topBlink;
        this.blinkStatus++;
      } else {
        this.blinkCount++;
      }
    } else if (this.blinkStatus === 3) {
      fill(this.blinkColor,this.blinkCount);
      if (this.blinkCount < this.bottomBlink) {
        this.blinkCount = 0;
        this.blinkStatus++;
      } else {
        this.blinkCount-=this.blinkSpeed;
      }
    } else if (this.blinkStatus === 4) {
      fill(this.blinkColor,this.bottomBlink);
      if (this.blinkCount >= this.blinkHide) {
        this.blinkCount = this.bottomBlink;
        this.blinkStatus = 1;
      } else {
        this.blinkCount++;
      }
    }

    if (this.blinkStatus > 0) {
      textAlign(RIGHT);
      textSize(30);
      text("Touch", windowWidth - 20, windowHeight - 20);
    }
    
    shader.fadein(10);
  }

  viewTime() {
    scene.change("time");
  }
}