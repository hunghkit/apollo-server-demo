import Model from "./model";
import { ICondition } from "./types";

export const findUser = (_: any, args: { where: ICondition }) => Model.getBy(args.where);

export const findUsers = (_: any, args: { where: ICondition, limit: number, page: number }) =>
  Model.getAll(args.where, args.limit, args.page);
