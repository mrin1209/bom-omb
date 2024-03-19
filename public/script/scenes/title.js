class Title extends Default {
  // 画像読み込み
  preload() {
    this.titleImg = loadImage("../img/title.jpg");
  }

  setup() {
    this.changeScreen = 0; // タイトル画面の状態
    this.fadeoutCount = 0; // フェードアウトの経過フレーム数
    this.currentMenu = 0; // 現在のカーソル位置
  }

  // シーン描画時に実行
  view() {
    switch (this.changeScreen) {
      case 0:
        this.titleView(); // タイトルとメニューの表示

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
        break;
      case 1:
        this.fadeout(); // 画面暗転
        break;
      case 2:
        scene.change("story"); // ストーリー画面へ遷移
        break;
    }
  }

  // 画面操作
  controller() {
    // メニューのタッチ判定を追加
    controller.press(this,this.newGame,70,270,180,40);
    controller.press(this,this.continue,70,345,180,40);
  }

  // タイトルとメニュー表示
  titleView() {
    image(this.titleImg, 0, 0);

    fill(255,255,255);
    textSize(50);
    text("Bomb\nSurveillance\nLate at Night", 20,80);

    textSize(30);
    text("New Game", 80,300);
    text("Continue", 80,375);
  }

  // 画面暗転
  fadeout() {
    // 半透明の黒が1フレームごとに重なってフェードアウトを再現
    fill(0,0,0,20);
    rect(0, 0, windowWidth, windowHeight);
    this.fadeoutCount+=1;
    // 一定時間経過で次のシーンへ遷移するフラグを立てる
    if (this.fadeoutCount >= 50) {
      this.changeScreen = 2;
    }
  }

  // ニューゲーム選択時の動作
  newGame(title) {
    title.index = 0;
    if (title.currentMenu === title.index) { // カーソルがニューゲームなら
      title.changeScreen = 1;
    } else {
       // ニューゲームにカーソルを合わせる
      title.currentMenu = 0;
    }
  }

  // コンテニュー選択時の動作
  continue(title) {
    title.index = 1;
    if (title.currentMenu === title.index) { // カーソルがコンテニューなら
      console.log("コンテニュー");
    } else {
      // コンテニューにカーソルを合わせる
      title.currentMenu = 1;
    }
  }
}