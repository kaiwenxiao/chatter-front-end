import { useParams } from "react-router-dom";
import { useGetChats } from "../../hook/useGetChat.ts";
import { Divider, InputBase, Paper, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { useCreateMessage } from "../../hook/useCreateMessage.ts";
import { useState } from "react";
import { useGetMessages } from "../../hook/useGetMessages.ts";
import Box from "@mui/material/Box";

const Chat = () => {
  const params = useParams();
  const [message, setMessage] = useState("");
  const chatId = params._id!;
  const { data } = useGetChats({ _id: params._id! });
  const [createMessage] = useCreateMessage(chatId);
  const { data: messages } = useGetMessages({ chatId });

  return (
    <Stack sx={{ height: "100%", justifyContent: "space-between" }}>
      <h1>{data?.chat.name}</h1>
      <Box>{messages?.messages.map((message) => <p>{message.content}</p>)}</Box>
      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          justifySelf: "flex-end",
          alignItems: "center",
          width: "100%",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, width: "100%" }}
          placeholder="Message"
          onChange={(event) => setMessage(event.target.value)}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          onClick={() => {
            createMessage({
              variables: {
                createMessageInput: {
                  content: message,
                  chatId,
                },
              },
            });
          }}
          color="primary"
          sx={{ p: "10px" }}
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default Chat;
