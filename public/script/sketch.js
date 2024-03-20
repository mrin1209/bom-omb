const scene = new Scene();
const shader = new Shader();
const controller = new Controller();
const game = new Game();

function setup() {
  createCanvas(windowWidth, windowHeight); // キャンバスを描画
  scene.setup("title"); // `タイトルシーン開始
}

function draw() {
  scene.view(); // タイトルシーン描画
}