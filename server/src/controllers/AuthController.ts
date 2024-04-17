import { NextFunction, Request, Response } from "express";
import { createUser } from "../data/user/userRepository";
import { IUser } from "../types";
import Respond from "../helpers/Respond";
import { generateJwt } from "../services/jwt";

class AuthController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, firstName, lastName } = req.body;

      const data = {
        firstName,
        lastName,
        email: email.toLowercase(),
      } as IUser;

      const user = await createUser(data);

      const token = generateJwt({
        _id: user?._id,
      });

      return Respond.success(res, "User created successfully...", 200, {
        token,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new AuthController();
