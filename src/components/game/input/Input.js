import React from "react";

import { useSelector } from "react-redux";

function Input() {
  const words = useSelector((state) => state.typing.words);

  return (
    <div>
      <div className="wordsBox">
        {words.map((item, i) => {
          return (
            <span className={`${item}-${i}`} key={i}>
              {item}{" "}
            </span>
          );
        })}
      </div>
      <input className="gameInput" type="text" />
    </div>
  );
}

export default Input;
