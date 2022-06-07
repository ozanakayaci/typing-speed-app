import React from "react";

import "./App.css";

import Game from "./components/game/Game.js";

const App = () => {
  return (
    <div className="flex  items-center flex-col my-8">
      <Game />
    </div>
  );
};

export default App;
