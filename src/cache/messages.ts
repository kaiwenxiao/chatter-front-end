import { ApolloCache } from "@apollo/client";
import { Message } from "../gql/graphql.ts";
import { getMessagesDocument } from "../hook/useGetMessages.ts";
import { PAGE_SIZE } from "../constants/page-size.ts";

export const updateMessages = (cache: ApolloCache<any>, message: Message) => {
  const messageQueryOptions = {
    query: getMessagesDocument,
    variables: {
      chatId: message.chatId,
      skip: 0,
      limit: PAGE_SIZE,
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
