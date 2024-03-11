import { useState } from "react";
import { Container, FormContainer, StyledInput } from "./style";
import { CustomedTypography } from "@/core/components";
import { useDispatch } from "react-redux";
import * as actions from "@/core/config/import/actions";
import { StyledButton } from "@/core/styles";

const Login = () => {
  const [name, setName] = useState("");
  const dispath = useDispatch();

  const login = () => {
    dispath(actions.login(name));
  };

  return (
    <Container>
      <CustomedTypography variant="h3" colorprops="gray">
        Welcome
      </CustomedTypography>
      <FormContainer>
        <CustomedTypography variant="h6" colorprops="gray">
          Plese Enter Your Name
        </CustomedTypography>
        <StyledInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <StyledButton onClick={login}>Accept</StyledButton>
      </FormContainer>
    </Container>
  );
};

export default Login;
