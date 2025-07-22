import { useQuery } from "@apollo/client";
import { LIST_ALL_CHARACTERS } from "../graphql";

const GET_ALL_CHARACTERS = () => {
  return useQuery(LIST_ALL_CHARACTERS);
};

export const useGQL = () => {
  return {
    GET_ALL_CHARACTERS,
  };
};
