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

  setGameFlow(val) {
    this.#gameFlow = val;
  }
}

const game = new Game();