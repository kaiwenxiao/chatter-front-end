import { graphql } from "../gql";
import { useQuery } from "@apollo/client";

export const getChatsDocument = graphql(`
  query Chats {
    chats {
      ...ChatFragment
    }
  }
`);

export const useGetChats = () => {
  return useQuery(getChatsDocument);
};
