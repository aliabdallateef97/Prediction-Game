import { Stack, styled } from "@mui/material";

export const Container = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "68%",
  gap: "8px",
  [theme.breakpoints.down('lg')]:{
    width:'80%'
  },
  [theme.breakpoints.down('md')]:{
    width:'100%'
  }
}));
