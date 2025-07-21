import { gql } from "@apollo/client";

export const DELETE_POST_GQL = gql`
  mutation ($id: ID!) {
    deletePost(id: $id)
  }
`;
