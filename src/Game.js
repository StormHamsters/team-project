import React, { useRef, useEffect, useState } from "react";
import Input from "./Input";

//after every input, the DOM re-renders using the functions here

const Game = ({ width, height, tilesize }) => {
  const canvasRef = useRef(); // create a reference to the canvas in the DOM
  const [player, setPlayer] = useState({ x: 64, y: 128 }); //creating the state manager for player using useState hook, setting the initial player postion
  let input = new Input(); // creating an instance of the Input class so we can handle input for the player

  const handleInput = (action, data) => {
    //self-explanitory, but...this function decides what we will do with our input
    let newPlayer = { ...player }; //spread operator pulls a copy of 'player' and creates a new instance called NewPlayer
    newPlayer.x += data.x * tilesize; //grabbing the input 'data', or what vector (direction) we are told to move in and translating that to our new x-coordinate
    newPlayer.y += data.y * tilesize; //same as above but for the y-coordinate
    setPlayer(newPlayer); // and then updating the state of Player with setPlayer
  };

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
    context.fillStyle = "#000"; //black
    context.fillRect(player.x, player.y, 16, 16); //actual drawing of player coordinates with 16 by 16 tile size with black square
  });
  return (
    <canvas
      ref={canvasRef}
      width={width * tilesize}
      height={height * tilesize}
      style={{ border: "1px solid black" }}
    ></canvas>
    // we are creating a canvas container element to represent our game world. initialized with the values discussed before.
    // also, we connect it to our instance of the game canvas by 'referencing' our canvasRef function created up top.
  );
};
export default Game;
