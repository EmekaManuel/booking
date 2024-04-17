import { Schema, model, Model } from "mongoose";
import { IUser } from "../../types";

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { timestamps: true }
);

let UserModel: Model<IUser>;

try {
  UserModel = model<IUser>("User");
} catch (error) {
  UserModel = model<IUser>("User", userSchema);
}

export default UserModel;
