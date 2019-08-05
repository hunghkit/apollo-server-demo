import {
  typeDef as User,
  typeQuery as userQuery,
  typeMutation as userMutation,
} from "./User/types";

const Query = `
  type Query {
    ${userQuery}
  }

  type Mutation {
    ${userMutation}
  }
`;

export default [Query, User];
