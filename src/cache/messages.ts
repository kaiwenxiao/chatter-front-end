import { ApolloCache } from "@apollo/client";
import { Message } from "../gql/graphql.ts";
import { getMessagesDocument } from "../hook/useGetMessages.ts";

export const updateMessages = (cache: ApolloCache<any>, message: Message) => {
  const messageQueryOptions = {
    query: getMessagesDocument,
    variables: {
      chatId: message.chatId,
    },
  };
  const messages = cache.readQuery({
    ...messageQueryOptions,
  });
  cache.writeQuery({
    ...messageQueryOptions,
    data: {
      messages: (messages?.messages || []).concat(message),
    },
  });
};
