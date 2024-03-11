import { Stack, styled } from "@mui/material";

export const SpeedWrapper = styled(Stack)(({ theme }) => ({
  width: "100%",
  borderRadius: "5px",
  border: `1px solid ${theme.palette.secondary.dark}`,
  padding: "4px 8px",
  backgroundColor: theme.palette.secondary.light,
  "& .x": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
