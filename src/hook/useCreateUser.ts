import { gql, useMutation } from "@apollo/client";
import { User } from "../models/User.ts";
import { graphql } from "../gql";

// 1.
// interface CreateUserInput {
//   createUserInput: {
//     email: string;
//     password: string;
//   };
// }
//
// const CREATE_USER = gql`
//   #    1. CreateUser - just a name?
//   #    2. $createUserInput - as an argument
//   #    3. CreateUserInput - an GraphQL type
//   mutation CreateUser($createUserInput: CreateUserInput!) {
//     #    4. createUserInput - as an argument defined by backend @Args('createUserInput')
//     #    5. $createUserInput - the GraphQL type of 2.
//     createUser(createUserInput: $createUserInput) {
//       _id
//       email
//     }
//   }
// `;
//
// const useCreateUser = () => {
//   // first generic type is expected return type, second is parameter
//   return useMutation<User, CreateUserInput>(CREATE_USER);
// };

// 2. since we have something similar to prisma client, we can use this
const createUserDocument = graphql(`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`);

const useCreateUser = () => {
  return useMutation(createUserDocument);
};

export { useCreateUser };
