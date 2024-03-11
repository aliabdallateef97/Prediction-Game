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