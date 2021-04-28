import Entity from "./Entity";
import Music from "./Music";

// constructor for music class
let audio = new Music();

class Loot extends Entity {
  action(verb, world) {
    if (verb === "bump") {
      world.player.add(this);
      audio.sound.play("pickup");
      world.remove(this);
    }

    if (verb === "drop") {
      console.log("drop", this);
    }
  }
}
export default Loot;
