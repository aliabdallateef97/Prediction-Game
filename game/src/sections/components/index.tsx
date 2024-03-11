import Part1 from "./part1/index";
import Part2 from "./part2";
import Part3 from "./part3";
import Part4 from "./part4";
import { Container, PartsContainer } from "./style";

const index = () => {

  return (
    <Container>
      <PartsContainer>
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
      </PartsContainer>
    </Container>
  );
};

export default index;
