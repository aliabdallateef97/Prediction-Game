import { Stack, styled } from "@mui/material";

export const Container = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: "100px",
  background: theme.palette.primary.light,
  [theme.breakpoints.down("lg")]: {
    padding: "80px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px",
  },
}));

export const PartsContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  columnGap: "2%",
  rowGap: "14px",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));
