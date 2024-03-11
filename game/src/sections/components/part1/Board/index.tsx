import { Container, CounterStack } from "./style";
import Counter from "./Counter/index";
import { useState } from "react";
import { StyledButton } from "@/core/styles";
import CustomizedTables from "./Round";
import Speed from "./Speed";
import { UseDispatch, useDispatch } from "react-redux";
import * as actions from '@/core/config/import/actions'

const Board = () => {
  const [points, setPoints] = useState(50);
  const [multiPlier, setMultiPlier] = useState(1.00);
  const dispath=useDispatch()

  const addPoint = () => {
    setPoints((prevState) => prevState + 25);
  };

  const minusPoint = () => {
    setPoints((prevState) => (prevState !== 0 ? prevState - 25 : prevState));
  };

  const addMultiPlier = () => {
    setMultiPlier((prevState) => prevState + 0.25);
  };

  const minusMultiPlier = () => {
    setMultiPlier((prevState) => (prevState !== 0 ? prevState - 0.25 : prevState));
  };

  const startGame=()=>{
    dispath(actions.start())
  }


  return (
    <Container>
      <CounterStack>
        <Counter
          value={points}
          title="Points"
          add={addPoint}
          minus={minusPoint}
        />
        <Counter title="MultiPlier" value={multiPlier} add={addMultiPlier} minus={minusMultiPlier}/>
      </CounterStack>
      <StyledButton onClick={startGame}>Start</StyledButton>
      <CustomizedTables />
      <Speed />
    </Container>
  );
};

export default Board;
