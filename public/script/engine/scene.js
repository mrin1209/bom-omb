class Scene {
  constructor() {
    // シーンを管理
    this.sceneList = {
      'title': Title,
      'story': Story,
      'time': Time,
      'play': Play,
      'monitor': Monitor,
    };

    // 現在のシーン
    this.scene = new Default();
  }

  // シーン切り替え
  change(name) {
    if (this.sceneList[name]) {
      this.destroy();
      this.setup(name);
    } else {
      return console.log('シーンがありません');
    }
  }

  // シーン終了
  destroy() {
    controller.reset();
    shader.reset();
    this.scene.destroy();
  }

  // シーン初期化
  setup(name) {
    this.scene = new this.sceneList[name]();
    this.scene.preload();
    this.scene.setup();
  }

  // シーン描画
  view() {
    this.scene.view();
    this.scene.controller();
  }
}