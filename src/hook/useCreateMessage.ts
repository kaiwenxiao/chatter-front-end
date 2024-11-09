import { useMutation } from "@apollo/client";
import { graphql } from "../gql";
import { updateMessages } from "../cache/messages.ts";
import { updateLatestMessage } from "../cache/latest-message.ts";

const createMessageDocument = graphql(`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
    createMessage(createMessageInput: $createMessageInput) {
      ...MessageFragment
    }
  }
`);

const useCreateMessage = () => {
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
      if (data?.createMessage) {
        updateMessages(cache, data.createMessage);
        updateLatestMessage(cache, data.createMessage);
      }
    },
  });
};

export { useCreateMessage };
