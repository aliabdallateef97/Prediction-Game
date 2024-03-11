import { Stack,styled } from "@mui/material";

export const Container=styled(Stack)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between'
}))