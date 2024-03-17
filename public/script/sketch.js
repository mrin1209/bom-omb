function setup() {
  createCanvas(windowWidth, windowHeight); // キャンバスを描画

  title.setup();
}

function draw() {
  console.log(game.getGameFlow);
  switch (game.getGameFlow) {
    case 'title':
      title.view();
      break;
    case 'story':
      destroy();
      break;
    default:
      break;
  }
}