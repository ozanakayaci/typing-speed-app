import React from "react";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

function TextArea() {
  const words = useSelector((state) => state.typing.words);
  const gameStarted = useSelector((state) => state.typing.gameStarted);
  const wrongCounter = useSelector((state) => state.typing.wrongCounter);
  const correctCounter = useSelector((state) => state.typing.correctCounter);

  const [top, setTop] = useState(0);

  useEffect(() => {
    if ((wrongCounter + correctCounter) % 6 === 0 && gameStarted) {
      setTop(top + 36);
    }
  }, [correctCounter, wrongCounter]);

  useEffect(() => {
    setTop(0);
  }, [gameStarted]);

  let style = {
    top: `-${top}px`,
  };

  return (
    <div className="max-h-24 overflow-hidden max-w-xl text-xl mb-5 border-2 rounded-xl border-cyan-600 p-4 pt-0">
      <div
        className="relative grid grid-cols-6 justify-items-center"
        style={style}
      >
        {words.map((item, i) => {
          return (
            <>
              <span
                className={`${
                  wrongCounter + correctCounter == i ? "bg-slate-300" : ""
                } color-blue p-1 ${
                  item.correct === ""
                    ? "word"
                    : item.correct
                    ? "correct"
                    : "false"
                }`}
                key={i}
              >
                {item.word}{" "}
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default TextArea;
