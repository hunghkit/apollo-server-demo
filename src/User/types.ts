import { Document, Model } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  name: string;
  picture?: string;
}

export interface ICondition {
  username?: string;
  name?: string;
  picture?: string;
}

export interface IUserModel extends Model<IUser> {
  deleteData(id: string): IUser;
  createData(user: IUser): IUser;
  updateData(id: string, user: IUser): IUser;
  getBy(where: ICondition): IUser;
  getAll(where: ICondition, limit: number, page: number): [IUser];
}

export interface IUserInput {
  username: IUser["username"];
  password: IUser["password"];
  name: IUser["name"];
  picture?: IUser["picture"];
}

export const typeDef = `
  type User {
    id: String!
    name: String
    username: String
    picture: String
  }

  input UserQuery {
    username: String!
    password: String!
    name: String!
    picture: String
  }

  input UserCondition {
    id: String,
    username: String
    name: String
  }

  input UserInput {
    username: String!
    password: String!
    name: String!
    picture: String
  }

  input UserInputUpdate {
    username: String
    password: String
    name: String
    picture: String
  }
`;

export const typeQuery = `
  findUser(where: UserCondition): User
  findUsers(where: UserCondition, limit: Int, page: Int): [User]
`;

export const typeMutation = `
  deleteUser(id: String): User
  createUser(user: UserInput!): User
  updateUser(id: String, user: UserInputUpdate!): User
`;
