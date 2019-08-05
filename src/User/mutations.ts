import Model from "./model";
import { IUser } from "./types";

export const createUser = (_: any, args: { user: IUser }): IUser => Model.createData(args.user);

export const updateUser = (_: any, args: { user: IUser, id: string }): IUser => Model.updateData(args.id, args.user);

export const deleteUser = (_: any, args: { id: string }): IUser => Model.deleteData(args.id);
