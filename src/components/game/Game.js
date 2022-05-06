import React from "react";

import Input from "./input/Input.js";
import ResultCard from "./resultCard/ResultCard.js";

function Game() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Game</h1>
      <Input />
      <ResultCard />
    </div>
  );
}

export default Game;
