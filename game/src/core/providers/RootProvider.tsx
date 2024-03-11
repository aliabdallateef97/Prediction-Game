import { ReactNode } from "react";

import { ThemeProvider } from ".";
import { APPContainer } from "../styles/App";
import { CssBaseline } from "@mui/material";



type TypeProps = {
  children: ReactNode;
};

function RootProvider({ children }: TypeProps) {
  return (
    <ThemeProvider>
      <CssBaseline />
      <APPContainer>
        {children}
      </APPContainer>
    </ThemeProvider>
  );
}

export default RootProvider;
