import { gql } from "@apollo/client";

export const CREATE_POST_GQL = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

export const DELETE_POST_GQL = gql`
  mutation ($id: ID!) {
    deletePost(id: $id)
  }
`;
