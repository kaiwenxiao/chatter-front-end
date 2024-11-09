import List from "@mui/material/List";
import ChatListItem from "./chat-list-item/ChatListItem";
import { Divider, Stack } from "@mui/material";
import ChatListHeader from "./chat-list-header/ChatListHeader";
import { useEffect, useState } from "react";
import ChatListAdd from "./chat-list-add/ChatListAdd.tsx";
import { useGetChats } from "../../hook/useGetChats.ts";
import { usePath } from "../../hook/usePath.ts";
import { useMessageCreated } from "../../hook/useMessageCreated.ts";

const ChatList = () => {
  const [chatListADdVisible, setChatListADdVisible] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState("");
  const { data } = useGetChats();
  const { path } = usePath();

  useMessageCreated({ chatIds: data?.chats.map((chat) => chat._id) || [] });

  useEffect(() => {
    const pathSplit = path.split("chats/");
    if (pathSplit.length === 2) {
      setSelectedChatId(pathSplit[1]);
    }
  }, [path]);

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
            bgcolor: "background.paper",
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          {data?.chats &&
            [...data.chats]
              .sort((chatA, chatB) => {
                if (!chatA.latestMessage) return -1;
                return (
                  new Date(chatA.latestMessage?.createdAt).getTime() -
                  new Date(chatB.latestMessage?.createdAt).getTime()
                );
              })
              .map((chat) => (
                <ChatListItem
                  chat={chat}
                  selected={chat._id === selectedChatId}
                />
              ))
              .reverse()}
        </List>
      </Stack>
    </>
  );
};

export default ChatList;
