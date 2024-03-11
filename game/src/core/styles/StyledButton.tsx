import { styled } from "@mui/material";

export const StyledButton = styled("button")(({ theme }) => ({
    width: "100%",
    padding: "12px",
    borderRadius: "5px",
    backgroundImage: 'linear-gradient(90deg, #ed6ea0 5%, #9d2b02 48%)',
    border: `1px solid ${theme.palette.secondary.dark}`,
    color: theme.palette.primary.dark,
    cursor: "pointer",
  }));