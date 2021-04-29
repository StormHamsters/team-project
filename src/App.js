import React from "react";
import Game from "./Game";

const App = () => (
  <div className="App">
    <Game width={40} height={40} tilesize={16} />
  </div>
  
);
// we are passing props (or parameters as we know them) into the Game component for initialization of the canvas size. Having them here
// makes it easier to change them if need be down the line, since a lot of the formatting of the canvas display involves them, naturally.

export default App;
