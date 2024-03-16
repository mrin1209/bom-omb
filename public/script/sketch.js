import { Title } from "./title.js";

/**
 * 初回に実行される
 */
function setup() {
  createCanvas(640, 480); // キャンバスを描画
  $game = new Game(); // ゲームの流れを管理するクラス
  $title = new Title(); // タイトル画面の処理をまとめたクラス
  console.log('process1');
}

/**
 * 1秒に60回実行される
 */
function draw() {
  switch ($game.getGameFlow) {
    case 'title':
      console.log('titlescreen');
      break;
  
    default:
      break;
  }
}

/**
 * ゲームの流れを管理するクラス
 */
class Game {
  #gameFlow = 'title';

  /**
   * 現在のゲーム状態を返す
   */
  get getGameFlow() {
    return this.#gameFlow;
  }
}