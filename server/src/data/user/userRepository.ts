import { IUser } from "../../types";
import UserModel from "./userModel";

export function createUser(user: Partial<IUser>) {
  const data = new UserModel(user);
  return data.save();
}

export async function findUserBy(
  param: Partial<IUser>,
  deletePassword = true
): Promise<IUser | null> {
  const user = await UserModel.findOne(param);
  if (!user) {
    return null;
  }
  if (!deletePassword) return user.toObject();
  const { password, ...userWithoutPassword } = user.toObject();
  return userWithoutPassword as unknown as IUser;
}
