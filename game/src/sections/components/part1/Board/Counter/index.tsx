import { CardContainer, CustomedTypography } from "@/core/components";
import { Counter, IconContainer, NumberBoard } from "./style";
import * as Icons from "@/core/config/import/icons";
import { Stack } from "@mui/material";

type PropsType={
    add:()=>void,
    minus:()=>void,
    value:number,
    title:string
}

const index = ({add,minus,title,value}:PropsType) => {
  return (
    <CardContainer width="49%">
      <Counter>
      <IconContainer onClick={minus}>
        <Icons.ArrowDropDownIcon />
        </IconContainer>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <CustomedTypography variant="h6" colorprops="gray">{title}</CustomedTypography>
          <NumberBoard>{value}</NumberBoard>
        </Stack>
        <IconContainer onClick={add}>
        <Icons.ArrowDropUpIcon />
        </IconContainer>
      </Counter>
    </CardContainer>
  );
};

export default index;
