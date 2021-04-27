import React, { useRef, useEffect, useState } from "react";
import Input from "./Input";
import Player from "./Player";
import Spawn from "./Spawn";
import World from "./World";
import Stairs from "./Stairs";

//after every input, the DOM re-renders using the functions here

const Game = ({ width, height, tilesize }) => {
  const canvasRef = useRef(); // create a reference to the canvas in the DOM
  const [player, setPlayer] = useState(new Player(1, 2, tilesize)); //creating the state manager for player using useState hook, setting the initial player postion
  const [world, setWorld] = useState(new World(width, height, tilesize));
  let input = new Input(); // creating an instance of the Input class so we can handle input for the player

  const handleInput = (action, data) => {
    //self-explanitory, but...this function decides what we will do with our input
    let newWorld = new World(); //spread operator pulls a copy of 'world' and creates a new instance called newWorld
    Object.assign(newWorld, world); //copy properties from newPlayer to our new Player object class
    newWorld.movePlayer(data.x, data.y);
    setWorld(newWorld); // and then updating the state of Player with setPlayer
  };

  useEffect(() => {
    console.log("Create Map!");
    let newWorld = new World();
    Object.assign(newWorld, world);
    newWorld.createCellularMap();
    newWorld.moveToSpace(world.player);
    let spawn = new Spawn(newWorld);
    spawn.spawnLoot(10);
    spawn.spawnMonsters(6);
    spawn.spawnStairs();
    setWorld(newWorld);
  }, []);

  useEffect(() => {
    //creating a useEffect hook that updates when the DOM is changed, this one runs our input functions on our input class instance, then turns around and runs our functions to reverse those functions to await the next input
    input.bindKeys();
    input.subscribe(handleInput);
    return () => {
      input.unbindKeys();
      input.unsubscribe(handleInput);
    };
  });
  useEffect(() => {
    //again, useEffect updates the DOM when something changes, and this one is drawing the "map" to the canvas itself
    const context = canvasRef.current.getContext("2d"); // calling a current context of our canvas ref object
    context.clearRect(0, 0, width * tilesize, height * tilesize); // clear canvas before drawing
    world.draw(context);
  });
  return (
    <>
      <canvas
        ref={canvasRef}
        width={width * tilesize}
        height={height * tilesize}
        style={{ border: "1px solid black", background: "dimgrey" }}
      ></canvas>
      <ul>
        {world.player.inventory.map((item, index) => (
          <li key={index}>{item.attributes.name}</li>
        ))}
      </ul>
      <ul>
        {world.history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
    // we are creating a canvas container element to represent our game world. initialized with the values discussed before.
    // also, we connect it to our instance of the game canvas by 'referencing' our canvasRef function created up top.
  );
};
export default Game;
