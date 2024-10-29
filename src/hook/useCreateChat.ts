import { graphql } from "../gql";
import { useMutation } from "@apollo/client";
import { ChatFragment } from "../fragments/chat.fragment.ts";

// const createChatDocument = graphql(`
//   mutation CreateChat($createChatInput: CreateChatInput!) {
//     createChat(createChatInput: $createChatInput) {
//       _id
//       userId
//       isPrivate
//       userIds
//       name
//     }
//   }
// `);

const createChatDocument = graphql(`
  mutation CreateChat($createChatInput: CreateChatInput!) {
    createChat(createChatInput: $createChatInput) {
      ...ChatFragment
    }
  }
`);

export const useCreateChat = () => {
  return useMutation(createChatDocument, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          // chats -> getChatsDocument
          chats(existingChats = []) {
            const newChatRef = cache.writeFragment({
              data: data?.createChat,
              fragment: ChatFragment,
            });
            return [...existingChats, newChatRef];
          },
        },
      });
    },
  });
};
