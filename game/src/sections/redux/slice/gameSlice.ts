import { createSlice } from "@reduxjs/toolkit";

interface GameType {
  start: boolean;
}

const initialState: GameType = {
  start: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    start(state) {
      state.start = true;
    },
  },
});

export const { start } = gameSlice.actions;

export default gameSlice.reducer;
