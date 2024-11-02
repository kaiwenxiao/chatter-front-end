import { graphql } from "../gql";
import { ChatQueryVariables } from "../gql/graphql.ts";
import { useQuery } from "@apollo/client";

const getChatDocument = graphql(`
  query Chat($_id: String!) {
    chat(_id: $_id) {
      ...ChatFragment
    }
  }
`);

export const useGetChats = (variables: ChatQueryVariables) => {
  return useQuery(getChatDocument, { variables });
};
