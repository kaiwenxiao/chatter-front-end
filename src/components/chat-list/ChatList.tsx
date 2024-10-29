import List from "@mui/material/List";
import ChatListItem from "./chat-list-item/ChatListItem";
import { Divider, Stack } from "@mui/material";
import ChatListHeader from "./chat-list-header/ChatListHeader";
import { useState } from "react";
import ChatListAdd from "./chat-list-add/ChatListAdd.tsx";
import { useGetChats } from "../../hook/useGetChats.ts";

const ChatList = () => {
  const [chatListADdVisible, setChatListADdVisible] = useState(false);
  const { data } = useGetChats();

  return (
    <>
      <ChatListAdd
        open={chatListADdVisible}
        handleClose={() => setChatListADdVisible(false)}
      />
      <Stack>
        <ChatListHeader handleAddChat={() => setChatListADdVisible(true)} />
        <Divider />
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          {data?.chats.map((chat) => <ChatListItem name={chat.name} />)}
        </List>
      </Stack>
    </>
  );
};

export default ChatList;
