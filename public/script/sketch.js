function setup() {
  createCanvas(windowWidth, windowHeight); // キャンバスを描画

  title.setup();
}

function draw() {
  switch (game.getGameFlow) {
    case 'title':
      title.view();
      break;
    default:
      break;
  }
}