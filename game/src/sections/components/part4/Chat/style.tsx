import { Stack, styled } from "@mui/material";

export const Container = styled(Stack)(({ theme }) => ({
width:'49%',
[theme.breakpoints.down('lg')]:{
  width:'80%'
},
[theme.breakpoints.down('md')]:{
  width:'100%'
}
}));

export const ChatContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "200px",
  borderRadius: "5px",
  backgroundColor: theme.palette.secondary.light,
  border: `1px solid ${theme.palette.secondary.dark}`,
  position: "relative",
  "& .form": {
    position: "absolute",
    backgroundColor: theme.palette.secondary.main,
    height: "50px",
    width: "100%",
    bottom: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "5px",
    padding: "6px",
    "& input": {
      width: "70%",
      backgroundColor: theme.palette.primary.light,
      borderRadius: "5px",
      outline: "0",
      padding: "7px",
      color: theme.palette.primary.dark,
    },
    "& .button": {
      width: "25%",
    },
  },
}));

export const Conversation = styled(Stack)(({ theme }) => ({
  width: "100%",
  marginBottom: "50px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  overflowY: "auto",
}));

export const MessageContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  height: "20px",
  alignItems: "center",
  gap: "2px",
  "& .message": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "4px",
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "5px",
  },
  "& .author": {
    fontSize: "14px",
    fontWight: "bold",
  },
  "& #you": {
    color: "#43a047",
  },
  "& #other": {
    color: "cornflowerblue",
  },
}));
