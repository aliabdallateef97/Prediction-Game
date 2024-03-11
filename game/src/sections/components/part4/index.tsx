import Chat from "./Chat";
import io from "socket.io-client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as selectors from '@/core/config/import/selectors'

const socket = io.connect("http://localhost:3001");

const Part4 = () => {
    const userName=useSelector(selectors.name)

  useEffect(() => {
    socket.emit("join_room", "splash");
  }, []);


  return <Chat socket={socket} userName={userName} room="splash"/>;
};

export default Part4;
