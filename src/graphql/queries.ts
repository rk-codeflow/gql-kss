import { gql } from "@apollo/client";

export const LIST_ALL_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        origin {
          name
        }
      }
    }
  }
`;
