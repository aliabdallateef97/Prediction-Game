import { Stack, styled } from "@mui/material";

export const Counter = styled(Stack)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  gap: "5px",
  width: "100%",
}));

export const NumberBoard = styled(Stack)(({ theme }) => ({
  width: "75px",
  borderRadius: "5px",
  backgroundColor: theme.palette.primary.light,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "30px",
}));

export const IconContainer = styled(Stack)(({ theme }) => ({
  //   padding: "1px",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: `1px solid ${theme.palette.primary.dark}`,
  cursor: "pointer",
}));
