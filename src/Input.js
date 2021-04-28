import Music from "./Music";
import Player from "./Player";

// constructor for music class
let audio = new Music();

class Input {
  observer = [];

  subscribe(fn) {
    this.observer.push(fn);
  }

  unsubscribe(fn) {
    this.observer = this.observer.filter((subscriber) => subscriber !== fn);
  }

  broadcast(action, data) {
    this.observer.forEach((subscriber) => subscriber(action, data));
  }

  handleKeys = (e) => {
    e.preventDefault();
    //play walk sound when key is pressed
    audio.sound.play("walk");
    switch (e.keyCode) {
      case 37:
        this.broadcast("move", { x: -1, y: 0 });
        break;
      case 38:
        this.broadcast("move", { x: 0, y: -1 });
        break;
      case 39:
        this.broadcast("move", { x: 1, y: 0 });
        break;
      case 40:
        this.broadcast("move", { x: 0, y: 1 });
        break;
      default:
        break;
    }
  };

  bindKeys() {
    document.addEventListener("keydown", this.handleKeys);
  }

  unbindKeys() {
    document.removeEventListener("keydown", this.handleKeys);
  }
}

export default Input;
