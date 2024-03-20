class Shader {
  constructor() {
    this.shaderCount;
    this.shaderSetup = false;
  }

  setup(count) {
    if (this.shaderSetup) {
      return;
    } else {
      this.shaderCount = count;
      this.shaderSetup = true;
    }
  }

  fadeout(speed) {
    this.setup(0);
    fill(0,0,0,this.shaderCount);
    rect(0, 0, windowWidth, windowHeight);
    this.shaderCount+=speed;
    if (this.shaderCount >= 255) {
      return true;
    } else {
      return false;
    }
  }

  fadein(speed) {
    this.setup(255);
    fill(0,0,0,this.shaderCount);
    rect(0, 0, windowWidth, windowHeight);
    this.shaderCount-=speed;
    if (this.shaderCount < 0) {
      return true;
    } else {
      return false;
    }
  }

  reset() {
    this.shaderSetup = false;
  }
}