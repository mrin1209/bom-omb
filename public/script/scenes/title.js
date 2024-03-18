class Title extends Default {
  // 画像読み込み
  preload() {
    this.titleImg = loadImage("../img/title.jpg");
  }

  setup() {
    this.changeScreen = 0;
    this.fadeout = 0;
  }

  // シーン描画時に実行
  view() {
    switch (this.changeScreen) {
      case 0:
        image(this.titleImg, 0, 0, windowWidth, windowHeight);
        break;
      case 1:
        fill(0,0,0,20);
        rect(0, 0, windowWidth, windowHeight);
        this.fadeout+=1;
        console.log(this.fadeout);
        if (this.fadeout >= 50) {
          this.changeScreen = 2;
        }
        break;
      case 2:
        scene.change("story");
        break;
    }
  }

  // 画面操作
  controller() {
    const titleMenu = Array.from(document.querySelectorAll(".titleMenu li")); // タイトルメニューのリスト
    let currentMenu = 0; // 選択中のメニュー
    
    // タイトルメニューをクリック
    titleMenu.forEach(li => {
      li.addEventListener("click", e => {
        const index = titleMenu.findIndex(list => list === e.target); // クリックしたメニュー

        if (currentMenu === index) { // 選択中のメニューを再度クリックしたら
          switch (currentMenu) {
            case 0:
              this.changeScreen = 1;
              break;
            case 1:
              console.log("コンテニュー");
              break;
            default:
              console.log("error");
              break;
          }
        } else {
          // メニューカーソルリセット
          titleMenu.forEach(li => { // 未選択ならクリックしたメニューにカーソルを合わせる
            li.classList.remove("selected");
          });

          // タップしたメニューにカーソルを合わせる
          e.target.classList.add("selected");

          currentMenu = index;
        }
      });
    });
  }
}