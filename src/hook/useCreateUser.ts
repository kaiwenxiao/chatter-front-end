import { gql, useMutation } from "@apollo/client";
import { User } from "../models/User.ts";

interface CreateUserInput {
  createUserInput: {
    email: string;
    password: string;
  };
}

const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`;

const useCreateUser = () => {
  // first generic type is expected return type, second is parameter
  return useMutation<User, CreateUserInput>(CREATE_USER);
};

export { useCreateUser };
