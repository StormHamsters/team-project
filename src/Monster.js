import Entity from "./Entity";
import Music from "./Music";

// constructor for music class
let audio = new Music();

class Monster extends Entity {
  action(verb, world) {
    if (verb === "bump") {
      world.addToHistory(`Player attacks the ${this.attributes.name}!`);
      this.attributes.health = this.attributes.health - 1;
      audio.sound.play("hit");

      if (this.attributes.health <= 0) {
        world.addToHistory(`The ${this.attributes.name} dies!`);
        audio.sound.play("enemy_death");
        world.remove(this);
      } else {
        world.addToHistory(
          `The ${this.attributes.name}'s health = ${this.attributes.health}`
        );
        world.player.attributes.health = world.player.attributes.health - 1;
        if (world.player.attributes.health <= 0) {
          world.addToHistory(`You have died!`);
          audio.sound.play("death");
        } else {
          world.addToHistory(
            `You have ${world.player.attributes.health} health`
          );
        }
      }
    }
  }
}

export default Monster;
