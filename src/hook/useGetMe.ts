import { gql, useQuery } from "@apollo/client";
import { User } from "../models/User.ts";
import { graphql } from "../gql";

// refer to useCreateUser
// const GET_ME = gql`
//   query Me {
//     me {
//       _id
//       email
//     }
//   }
// `;

const getMeDocument = graphql(`
  query Me {
    me {
      _id
      email
    }
  }
`);

export const useGetMe = () => {
  return useQuery<{ me: User }>(getMeDocument);
};
