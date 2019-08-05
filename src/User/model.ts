import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { IUser, IUserInput, IUserModel, ICondition } from "./types";

export const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    set: (v: string): string => bcrypt.hashSync(v, 10),
  },
  name: { type: String, required: true },
  picture: String,
});

UserSchema.statics.getAll = async function(where: ICondition, limit: number = 10, page: number = 0) {
  return await this.find(where || {}, null, { limit, skip: limit * page });
};

UserSchema.statics.getBy = async function(where: ICondition) {
  return await this.findOne(where || {});
};

UserSchema.statics.createData = async function(user: any) {
  return await this.create(user);
};

UserSchema.statics.updateData = async function(id: string, user: IUserInput) {
  try {
    const current = this.findOne({ _id: id });

    if (!current) {
      throw new Error("User not found");
    }

    await this.updateOne({ _id: id }, user);
    return this.getBy({ _id: id });
  } catch (e) {
    return e;
  }
};

UserSchema.statics.deleteData = async function(id: string) {
  try {
    const current = this.findOne({ _id: id });

    if (!current) {
      throw new Error("User not found");
    }

    await this.deleteOne({ _id: id });
    return current;
  } catch (e) {
    return e;
  }
};

const User = mongoose.model<IUser, IUserModel>("User", UserSchema);

export default User;
