import { ReactNode } from "react";
import { CardContainer, CustomedTypography } from "@/core/components";
import { HeaderItem } from "./style";

type PropsType = {
  title: string;
  icon: ReactNode;
};

const Item = ({ title, icon }: PropsType) => {
  return (
    <CardContainer width="32%">
      <HeaderItem>
        <CustomedTypography colorprops="white" variant="h5">
          {title}
        </CustomedTypography>
        {icon}
      </HeaderItem>
    </CardContainer>
  );
};

export default Item;
