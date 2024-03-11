import { Stack, styled } from "@mui/material";

export const Container = styled(Stack)(({ theme }) => ({
  padding: "60px 12px 0px ",
  border: `1px solid ${theme.palette.secondary.dark}`,
  borderRadius: "5px",
  background: theme.palette.secondary.light,
  width: "30%",
  height: "450px",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    width: "60%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const FormContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "60px",
  gap: "10px",
  width: "100%",
}));

export const StyledInput = styled("input")(({ theme }) => ({
  width: "100%",
  padding: "12px",
  borderRadius: "5px",
  backgroundColor: theme.palette.primary.light,
  border: `1px solid ${theme.palette.secondary.dark}`,
  color: theme.palette.primary.dark,
  outline: "none",
}));
