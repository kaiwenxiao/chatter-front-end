import { graphql } from "../gql";
import { useQuery } from "@apollo/client";
import { QueryChatsArgs } from "../gql/graphql.ts";

export const getChatsDocument = graphql(`
  query Chats($skip: Int!, $limit: Int!) {
    chats(skip: $skip, limit: $limit) {
      ...ChatFragment
    }
  }
`);

export const useGetChats = (variables: QueryChatsArgs) => {
  return useQuery(getChatsDocument, { variables });
};
