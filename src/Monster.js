import Entity from "./Entity";

class Monster extends Entity {
  action(verb, world) {
    if (verb === "bump") {
      world.addToHistory(`Player attacks the ${this.attributes.name}!`);
      this.attributes.health = this.attributes.health - 1;

      if (this.attributes.health <= 0) {
        world.addToHistory(`The ${this.attributes.name} dies!`);
        world.remove(this);
      } else {
        world.addToHistory(
          `The ${this.attributes.name}'s health = ${this.attributes.health}`
        );
        world.player.attributes.health = world.player.attributes.health - 1;
        if (world.player.attributes.health <= 0) {
          world.addToHistory(`You have died!`);
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
