const polygon = new Polygon();
const scene = new Scene();
const shader = new Shader();
const controller = new Controller();
const word = new Word();
const game = new Game();

function setup() {
  polygon.offPolygon();
  scene.setup("play");
}

function draw() {
  scene.view(); // タイトルシーン描画
}

function touchStarted() {
  controller.load();
}