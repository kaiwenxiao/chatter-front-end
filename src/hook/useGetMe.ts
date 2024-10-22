import { gql, useQuery } from "@apollo/client";
import { User } from "../models/User.ts";

const GET_ME = gql`
  query Me {
    me {
      _id
      email
    }
  }
`;

export const useGetMe = () => {
  return useQuery<{ me: User }>(GET_ME);
};
