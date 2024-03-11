import { Stack } from "@mui/material";
import * as Icons from "@/core/config/import/icons";
import { CustomedTypography } from "@/core/components";
import { ChatContainer, Container, Conversation, MessageContainer } from "./style";
import { StyledButton } from "@/core/styles";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

type propsType = {
  userName: string;
  room: string;
  socket: Socket;
};

type messageType = {
  author: string;
  message: string;
  room:string
};

const Chat = ({ socket, userName,room }: propsType) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<messageType[]>([]);


  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        author: userName,
        message: currentMessage,
        room:room
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <Container>
      <Stack flexDirection={"row"} marginTop={"6px"}>
        <Icons.ChatBubbleIcon />
        <CustomedTypography variant="h4" colorprops="white">
          Chat
        </CustomedTypography>
      </Stack>
      <ChatContainer>
        <Conversation>
          {messageList.map((messageContent) => {
            return (
              <MessageContainer key={messageContent.author+messageContent.message}>
                <h6
                  className="author"
                  id={userName === messageContent.author ? "you" : "other"}
                >
                  {messageContent.author}:
                </h6>
                <div className="message">{messageContent.message}</div>
              </MessageContainer>
            );
          })}
        </Conversation>
        <div className="form">
          <input
            type="text"
            value={currentMessage}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
          />
          <StyledButton className="button" onClick={sendMessage}>
            Send
          </StyledButton>
        </div>
      </ChatContainer>
    </Container>
  );
};

export default Chat;
