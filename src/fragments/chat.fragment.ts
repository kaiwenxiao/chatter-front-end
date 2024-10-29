import { graphql } from "../gql";

// Chat - graphql entity
export const ChatFragment = graphql(`
  fragment ChatFragment on Chat {
    _id
    userId
    isPrivate
    userIds
    name
  }
`);
