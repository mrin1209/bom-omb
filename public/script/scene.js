class Scene {
  // シーンを管理
  #sceneList = {
    'title': Title,
    'story': Story,
  };

  // 現在のシーン
  #scene = new Default();

  // シーン切り替え
  change(name) {
    if (this.#sceneList[name]) {
      this.destroy();
      this.setup(name);
    } else {
      return console.log('シーンがありません');
    }
  }

  // シーン終了
  destroy() {
    this.#scene.destroy();
  }

  // シーン初期化
  setup(name) {
    this.#scene = new this.#sceneList[name]();
    this.#scene.preload();
    this.#scene.controller();
    this.#scene.setup();
  }

  // シーン描画
  view() {
    this.#scene.view();
  }
}

scene = new Scene();