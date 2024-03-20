class Shader {
  constructor() {
    this.fadeCount;
    this.Setup = false;
  }

  fadeSetup(fadeCount) {
    if (this.Setup) {
      return;
    } else {
      this.fadeCount = fadeCount;
      this.Setup = true;
    }
  }

  fadeout(speed) {
    this.fadeSetup(0);
    this.view(this.fadeCount);
    this.fadeCount+=speed;
    if (this.fadeCount >= 255) {
      return true;
    } else {
      return false;
    }
  }

  fadein(speed) {
    this.fadeSetup(255);
    this.view(this.fadeCount);
    this.fadeCount-=speed;
    if (this.fadeCount < 0) {
      return true;
    } else {
      return false;
    }
  }

  view(fadeoutCount) {
    fill(0,0,0,fadeoutCount);
    rect(0, 0, windowWidth, windowHeight);
  }

  reset() {
    this.Setup = false;
  }
}