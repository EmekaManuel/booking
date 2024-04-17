import { NextFunction, Request, Response } from "express";
import Respond from "../helpers/Respond";
import { decodeToken, generateJwt } from "../services/jwt";
import { findUserBy } from "../data/user/userRepository";

class AuthMiddleWares {
  async registrationCheckCredentials(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { email, firstName, lastName } = req.body;

      if (!email || !firstName || !lastName) {
        return Respond.error(
          res,
          "email, firstName, lastName are compulsory fields.",
          400
        );
      }

      const userWithEmailExists = await findUserBy({
        email: email.toLowercase(),
      });

      if (!!userWithEmailExists) {
        return Respond.error(res, "This email already exists", 400);
      }
      
      next();
    } catch (error) {
      Respond.error(res, "an error occured", 400);
    }
  }
}

export default new AuthMiddleWares();
