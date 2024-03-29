class Title extends Default {
  // 画像読み込み
  preload() {
    this.titleImg = loadImage("../asset/img/title.jpg");
  }

  setup() {
    this.changeScreen = 0; // タイトル画面の状態
    this.currentMenu = 0; // 現在のカーソル位置

    // メニューのタッチ判定を追加
    controller.click(() => { this.newGame(); },70,270,180,40); // コールバック関数はthisの参照先が変わるためアロー関数で渡す必要がある
    controller.click(() => { this.continue(); },70,345,180,40);
  }

  // シーン描画時に実行
  view() {
    switch (this.changeScreen) {
      case 0:
        this.titleView(); // タイトルとメニューの表示
        break;
      case 1:
        this.titleView(); // タイトルとメニューの表示
        
        if (shader.fadeout(10)) {
          this.changeScreen = 2;
        }
        break;
      case 2:
        fill(255,255,255);
        scene.change("story"); // ストーリー画面へ遷移
        break;
    }
  }

  // タイトルとメニュー表示
  titleView() {
    image(this.titleImg, 0, 0, windowWidth, windowHeight);

    fill(255,255,255);
    textSize(50);
    text("Bomb\nSurveillance\nLate at Night", 20,80);

    textSize(30);
    text("New Game", 80,300);
    text("Continue", 80,375);

    // カーソル表示
    textSize(30);
    switch (this.currentMenu) {
      case 0: // New Game
        text(">>", 20,300);
        break;
      case 1: // continue
        text(">>", 20,375);
        break;
    }
  }

  // ニューゲーム選択時の動作
  newGame() {
    this.index = 0;
    if (this.currentMenu === this.index) { // カーソルがニューゲームなら
      this.changeScreen = 1;
    } else {
       // ニューゲームにカーソルを合わせる
       this.currentMenu = 0;
    }
  }

  // コンテニュー選択時の動作
  continue() {
    this.index = 1;
    if (this.currentMenu === this.index) { // カーソルがコンテニューなら
      console.log("コンテニュー");
    } else {
      // コンテニューにカーソルを合わせる
      this.currentMenu = 1;
    }
  }
}