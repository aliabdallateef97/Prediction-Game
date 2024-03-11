import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

interface ThemeInterface {
  mode: PaletteMode;
}

const initialState: ThemeInterface = {
  mode: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setMode: (state) => {
      if (state.mode === "light") state.mode = "dark";
      else state.mode = "light";
    },
  },
});

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;
