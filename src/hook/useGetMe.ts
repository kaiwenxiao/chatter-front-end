import { gql, useQuery } from "@apollo/client";
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
      username
    }
  }
`);

export const useGetMe = () => {
  return useQuery(getMeDocument);
};
