import { breakpoints } from "./breakpoints";
import { darkPalette } from "./palette/dark";
import { lightPalette } from "./palette/light";
import { PaletteMode,Direction } from "@mui/material";
import {fonts} from './fonts'

type PropsType={
  mode:PaletteMode,
  dir:Direction
}


export const themeSettings = ({mode,dir}:PropsType) => {
  return {
    direction: dir,
    palette: {
      mode: mode,
      ...(mode === "dark" ? { ...darkPalette } : { ...lightPalette }),
    },
    typography:{ ...fonts, fontFamily: "Nunito,sans-serif" },
    breakpoints: { ...breakpoints },
  };
};
