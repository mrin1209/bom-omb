class Controller {
  constructor() {
    this.reset();
  }

  reset() {
    this.clickList = [];
  }

  load() {
    this.clickList.forEach(val => {
      if (mouseX >= val.x && mouseX <= (val.x+val.w) && mouseY >= val.y && mouseY <= (val.y+val.h)) {
        val.func();
      }
    });
  }

  click(
    func,
    x = 0,
    y = 0,
    w = windowWidth,
    h = windowHeight
  ) {
    this.clickList.push({
      'func':func,
      'x':x,
      'y':y,
      'w':w,
      'h':h,
    });
  }
}