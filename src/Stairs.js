import Entity from "./Entity";
import Spawn from "./Spawn";

class Stairs extends Entity {
  attributes = {
    name: "Stairs",
    color: "black",
    ascii: ">",
    offset: { x: 2, y: 2 },
  };

  action(verb, world) {
    if (verb === "bump") {
      world.addToHistory("You move down the stairs...");
      world.createCellularMap();
      world.player.x = 0;
      world.player.y = 0;
      world.moveToSpace(world.player);
      world.entities = world.entities.filter((e) => e === world.player);
      let spawn = new Spawn(world);
      spawn.spawnLoot(10);
      spawn.spawnMonsters(9);
      spawn.spawnStairs();
    }
  }
}

export default Stairs;
