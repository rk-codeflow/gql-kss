import { useMutation } from "@apollo/client";
import { DELETE_POST_GQL } from "../graphql";

const crudOpsGQL = () => {
  const DELETE_POST = useMutation(DELETE_POST_GQL);

  return {
    DELETE_POST,
  };
};

export default crudOpsGQL;
