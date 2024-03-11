import { Stack, styled } from "@mui/material";

export const HeaderItem = styled(Stack)(({ theme }) => ({
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "22px",
  backgroundColor: theme.palette.secondary.light,
  "& .icon": {
    position: "absolute",
    left: "0px",
  },
}));
