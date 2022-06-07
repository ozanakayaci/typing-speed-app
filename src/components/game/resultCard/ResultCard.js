import React from "react";

import { useSelector } from "react-redux";

function ResultCard() {
  const wrongCounter = useSelector((state) => state.typing.wrongCounter);
  const correctCounter = useSelector((state) => state.typing.correctCounter);

  const keyStrokes = useSelector((state) => state.typing.keyStrokes);

  return (
    <div className="border-2 border-cyan-600 mt-10 p-5">
      Result
      <div>{keyStrokes.correctKey / 5} WPM</div>
      <div>
        Keystrokes:(
        <span className="text-green-600">{keyStrokes.correctKey}</span>|
        <span className="text-red-600">{keyStrokes.wrongKey}</span>)
        <span>{keyStrokes.correctKey + keyStrokes.wrongKey}</span>
      </div>
      <div>
        Correct Words: <span className="text-green-600">{correctCounter}</span>
      </div>
      <div>
        Wrong Words: <span className="text-red-600">{wrongCounter}</span>
      </div>
    </div>
  );
}

export default ResultCard;
