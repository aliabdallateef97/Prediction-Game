import { Stack, styled } from "@mui/material";

export const Container = styled(Stack)(({ theme }) => ({
  width: "30%",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  [theme.breakpoints.down('lg')]:{
    width:'60%'
  },
  [theme.breakpoints.down('md')]:{
    width:'100%'
  }
}));

export const CounterStack = styled(Stack)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "2%",
}));
