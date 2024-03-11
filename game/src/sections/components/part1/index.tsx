import Login from "./Login";
import Board from "./Board";
import { useSelector } from "react-redux";
import * as selectors from "@/core/config/import/selectors";

const Part1 = () => {
  const userName = useSelector(selectors.name);
  let content = <Login />;
  if (userName) {
    content = <Board />;
  }
  return <>{content}</>;
};

export default Part1;
