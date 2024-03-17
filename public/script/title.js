class Title {
  setup() {
    this.titleImg = loadImage("../img/title.jpg");

    this.controller();
  }

  view() {
    image(this.titleImg, 0, 0, windowWidth, windowHeight);
  }

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
              console.log("new game");
              game.setGameFlow("story");
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

const title = new Title();