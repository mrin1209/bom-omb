function preload() {
  title.preload();
}

function setup() {
  createCanvas(390, 844); // キャンバスを描画
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