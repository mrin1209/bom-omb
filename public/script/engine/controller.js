class Controller {
  constructor() {
    this.pressList = [];
    this.clicked = false;
  }

  load() {
    if (mouseIsPressed && this.clicked === false) {
      this.pressList.forEach(val => {
        if (mouseX >= val.x && mouseX <= (val.x+val.w) && mouseY >= val.y && mouseY <= (val.y+val.h)) {
          val.func(val.instance);
        }
      });
    }

    if (mouseIsPressed) {
      this.clicked = true;

      // this.pressList.forEach(val => {
      //   stroke(100, 255, 100);
      //   noFill();
      //   rect(val.x, val.y, val.w, val.h);
      // });
    } else {
      this.clicked = false;
    }
  }

  press(instance,func,x,y,w,h) {
    this.pressList.push({
      'instance':instance,
      'func':func,
      'x':x,
      'y':y,
      'w':w,
      'h':h,
    });
  }

  reset() {
    this.pressList = [];
  }
}