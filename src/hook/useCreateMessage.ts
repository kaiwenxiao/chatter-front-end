import { useMutation } from "@apollo/client";
import { graphql } from "../gql";
import { getMessagesDocument } from "./useGetMessages.ts";

const createMessageDocument = graphql(`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
    createMessage(createMessageInput: $createMessageInput) {
      ...MessageFragment
    }
  }
`);

const useCreateMessage = (chatId: string) => {
  return useMutation(createMessageDocument, {
    update(cache, { data }) {
      // 1.
      // Update all relative graphql query/mutation,
      // but we only want specific one updated.
      //
      // cache.modify({
      //   fields: {
      //     // chats -> getMessagesDocument
      //     messages(existingMessages = []) {
      //       const newMessageRef = cache.writeFragment({
      //         data: data?.createMessage,
      //         fragment: MessageFragment,
      //       });
      //       return [...existingMessages, newMessageRef];
      //     },
      //   },
      // });
      //
      //   2.
      const messageQueryOptions = {
        query: getMessagesDocument,
        variables: {
          chatId,
        },
      };
      const messages = cache.readQuery({
        ...messageQueryOptions,
      });
      if (!messages || !data?.createMessage) return;
      cache.writeQuery({
        ...messageQueryOptions,
        data: { messages: messages.messages.concat(data.createMessage) },
      });
    },
  });
};

export { useCreateMessage };
