import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  startGame,
  endGame,
  counterReducer,
  wordClass,
  setWords,
  keyStrokesCounter,
} from "../../../redux/typingSlice";

function Input() {
  const dispatch = useDispatch();

  const gameStarted = useSelector((state) => state.typing.gameStarted);
  const words = useSelector((state) => state.typing.words);

  const [timer, setTimer] = useState(0);
  const [counter, setCounter] = useState(0);
  const [word, setWord] = useState("");
  const [tempWord, setTempWord] = useState("");
  const [gameFinish, setGameFinish] = useState(false);

  useEffect(() => {
    dispatch(setWords());
  }, []);

  useEffect(() => {
    if (gameStarted && timer > 0) {
      const countDown = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(countDown);
    } else if (timer === 0) {
      restartGame();
    }
  }, [timer]);

  const restartGame = () => {
    dispatch(endGame());
    setWord("");
    setCounter(0);
    setTempWord(0);
    setGameFinish(true);
  };
  const handleChange = (e) => {
    if (e.target.value[e.target.value.length - 1] === " ") {
      setCounter(counter + 1);
      if (tempWord === words[counter].word) {
        dispatch(counterReducer("correctCounter"));
        dispatch(wordClass([true, counter]));
      } else {
        dispatch(wordClass([false, counter]));
        dispatch(counterReducer("wrongCounter"));
      }
      setWord("");
    } else {
      if (!gameStarted) {
        dispatch(startGame());
        setTimer(60);
      } else if (words[counter].word == e.target.value) {
        setTempWord(e.target.value);
      } else if (
        words[counter].word.slice(0, e.target.value.length) !== e.target.value
      ) {
        setTempWord(e.target.value);
        dispatch(wordClass([false, counter]));
        dispatch(keyStrokesCounter("wrongKey"));
      } else if (
        words[counter].word.slice(0, e.target.value.length) == e.target.value
      ) {
        dispatch(wordClass(["", counter]));
        setTempWord(e.target.value);
        dispatch(keyStrokesCounter("correctKey"));
        console.log(e);
      } else setTempWord(e.target.value);
      setWord(e.target.value);
    }
  };

  return (
    <div className="flex max-w-xl">
      <input
        disabled={gameFinish ? true : false}
        value={word}
        onChange={handleChange}
        className="p-2 border-2 rounded-l-lg border-indigo-300 hover:border-indigo-400 focus:outline-indigo-500"
        type="text"
      />
      <div className="p-2 border-2  border-l-0   border-indigo-300 hover:border-indigo-400">
        {timer}
      </div>
      <button
        onClick={() => {
          restartGame();
          setGameFinish(false);
          dispatch(setWords());
        }}
        className="p-2 border-2 border-l-0 rounded-r-lg  border-indigo-300 hover:border-indigo-400 bg-indigo-200 active:bg-indigo-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default Input;
