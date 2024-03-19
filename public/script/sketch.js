const scene = new Scene();
const controller = new Controller();

function setup() {
  createCanvas(windowWidth, windowHeight); // キャンバスを描画
  scene.setup("title"); // `タイトルシーン開始
}

function draw() {
  scene.view(); // タイトルシーン描画
}