import { Request } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../types";

const SECRET_JWT = "12345";

export function generateJwt(payload: any, expiresIn: string | number = "1w") {
  return jwt.sign(payload, SECRET_JWT, { expiresIn });
}

export function decodeToken<T>(token: string): T | void {
  try {
    return jwt.verify(token, SECRET_JWT!) as T;
  } catch (err) {
    return;
  }
}

export function getUserCredentialFromReq(req: Request) {
  const token = req.headers.authorization?.split(" ")[1];
  const decodedToken = decodeToken<IUser>(token!);
  if (!decodedToken) return {} as IUser;
  const { _id } = decodedToken;
  return { _id };
}
