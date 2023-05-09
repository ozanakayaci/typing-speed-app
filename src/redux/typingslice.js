import { createSlice } from "@reduxjs/toolkit";
import randomWords from "random-words";

export const typingSlice = createSlice({
  name: "typing",
  initialState: {
    gameStarted: false,
    words: [],
    correctCounter: 0,
    wrongCounter: 0,
    keyStrokes: {
      correctKey: 0,
      wrongKey: 0,
    },
  },
  reducers: {
    startGame: (state) => {
      state.gameStarted = true;
      state.correctCounter = 0;
      state.wrongCounter = 0;
      state.keyStrokes.correctKey = 0;
      state.keyStrokes.wrongKey = 0;
    },
    endGame: (state) => {
      state.gameStarted = false;
    },
    counterReducer: (state, action) => {
      state[action.payload]++;
    },
    keyStrokesCounter: (state, action) => {
      state.keyStrokes[action.payload]++;
    },
    wordClass: (state, action) => {
      state.words[action.payload[1]].correct = action.payload[0];
    },
    setWords: (state, action) => {
      state.words = [];
      let newWords = randomWords({ exactly: 252 });
      for (let i = 0; i < newWords.length; i++) {
        if (newWords[i].length > 2 && newWords[i].length < 10) {
          state.words.push({ word: newWords[i], correct: "" });
        }
      }
    },
  },
});

export const {
  startGame,
  endGame,
  counterReducer,
  wrongWords,
  wordClass,
  setWords,
  keyStrokesCounter,
} = typingSlice.actions;
export default typingSlice.reducer;
