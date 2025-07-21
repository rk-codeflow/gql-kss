import { useQuery } from "@apollo/client";
import { FETCH_ALL_LISTS, LIST_ALL_CHARACTERS } from "../graphql";

const GET_ALL_CHARACTERS = () => {
  return useQuery(LIST_ALL_CHARACTERS);
};

const GET_ALL_LISTS = () => {
  return useQuery(FETCH_ALL_LISTS);
};

export const useGQL = () => {
  return {
    GET_ALL_CHARACTERS,
    GET_ALL_LISTS,
  };
};
