import { createSlice } from "@reduxjs/toolkit";

export const typingSlice = createSlice({
  name: "typing",
  initialState: {
    words: ["name", "surname", "age", "false"],
    correctCounter: 0,
    wrongCounter: 0,
    accuracy: 0,
    keyStrokes: {
      correctKey: 2,
      wrongKey: 5,
    },
  },
  reducer: {},
});

export default typingSlice.reducer;
