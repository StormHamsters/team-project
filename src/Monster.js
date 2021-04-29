import Entity from "./Entity";
import Music from "./Music";

// constructor for music class
let audio = new Music();

class Monster extends Entity {
  action(verb, world) {
    if (verb === "bump") {
      world.addToHistory(`Player attacks the ${this.attributes.name}!`);
      //generate damage value
      //get player base damage
      var baseDamage = world.player.attributes.damage;
      var finalDamage
      //generate random number for crit chance
      var critChance
      critChance = Math.floor(Math.random() * (100 - 1) + 1);
      //if crit condition is met
      if(critChance > 2){
        //multiple base damage by 2
        finalDamage = baseDamage * 2;
        audio.loudSound.play("player_crit");
        world.addToHistory('You critical strike for ' + finalDamage + '!');
      }else{
        //otherwise deal base damage
        finalDamage = baseDamage;
        audio.sound.play("hit");
        world.addToHistory(`You deal ${finalDamage}`);
      }
      this.attributes.health = this.attributes.health - finalDamage;

      if (this.attributes.health <= 0) {
        world.addToHistory(`The ${this.attributes.name} dies!`);
        audio.sound.play("enemy_death");
        world.remove(this);
      } else {
        world.addToHistory(
          `The ${this.attributes.name}'s health = ${this.attributes.health}`
        );
        //get enemy damage values
        var enemyBaseDamage;
        var enemyFinalDamage;
        if (this.attributes.name == "Goblin"){
          enemyBaseDamage = 1;
        }else if(this.attributes.name == "Troll" || this.attributes.name == "Dragon"){
          enemyBaseDamage = 2;
        }else{
          enemyBaseDamage = 0;
        }
        //calculate enemy crit because it wouldn't fair if only we could I guess
        var enemyCritChance;
        enemyCritChance = Math.floor(Math.random() * (100 - 1) + 1);
        //check for crit and display result
        if(enemyCritChance > 2){
          enemyFinalDamage = Math.floor(enemyBaseDamage * 1.5)
          audio.loudSound.play("enemy_crit");
          world.addToHistory(`${this.attributes.name} crit for ${enemyFinalDamage}!`);
        }else{
          enemyFinalDamage = enemyBaseDamage;
          world.addToHistory(`${this.attributes.name} deals ${enemyFinalDamage}`);
        }
        world.player.attributes.health = world.player.attributes.health - enemyFinalDamage;
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
