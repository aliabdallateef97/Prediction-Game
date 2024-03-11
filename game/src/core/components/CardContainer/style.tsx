import { Stack, styled } from "@mui/material";

export const CardContainer = styled(Stack)(({ theme }) => ({
  padding: "4px 8px",
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: "5px",
  backgroundColor: theme.palette.secondary.light,
}));
