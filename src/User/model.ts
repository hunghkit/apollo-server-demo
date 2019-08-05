import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

import { IUser } from './types'

export const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { 
    type: String,
    required: true,
    set: (v: string): string => bcrypt.hashSync(v, 10)
  },
  name: { type: String, required: true },
  picture: String
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
