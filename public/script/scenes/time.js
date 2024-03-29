class Time extends Default {
  // シーン初期化時に実行
  setup() {
    this.time = game.getTime();
    this.day = game.getDay();

    this.viewText = `Day ${this.day}\nAM:${( '00' + this.time ).slice( -2 )}:00`;

    setTimeout(() => {
      scene.change("play");
    }, "3000");
  }

  // シーン描画時に実行
  view() {
    fill(0,0,0);
    rect(0, 0, windowWidth, windowHeight);

    fill(255,255,255);
    textAlign(CENTER, CENTER);
    textSize(25);
    text(this.viewText, windowWidth / 2, windowHeight / 2);
  }
}