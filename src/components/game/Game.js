import React from "react";

import TextArea from "./inputs/TextArea.js";
import Input from "./inputs/Input.js";
import ResultCard from "./resultCard/ResultCard.js";

import { useSelector } from "react-redux";

function Game() {
  const gameStarted = useSelector((state) => state.typing.gameStarted);

  return (
    <div
      className="flex  items-center flex-col my-8 antialiased
    "
    >
      <h1 className=" font-semibold	text-cyan-7 00	 mb-5 font-mono text-5xl	">
        Typing Speed
      </h1>
      <TextArea />
      <Input />
      <ResultCard />
    </div>
  );
}

export default Game;
