import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POST_GQL, DELETE_POST_GQL, FETCH_ALL_LISTS } from "../graphql";

const crudOpsGQL = () => {
  const CREATE_POST = () => {
    return useMutation(CREATE_POST_GQL);
  };
  const DELETE_POST = () => {
    return useMutation(DELETE_POST_GQL);
  };

  const GET_ALL_LISTS = () => {
    return useQuery(FETCH_ALL_LISTS);
  };

  return {
    CREATE_POST,
    DELETE_POST,
    GET_ALL_LISTS,
  };
};

export default crudOpsGQL;
