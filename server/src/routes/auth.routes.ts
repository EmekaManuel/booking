import { Router } from "express";
import AuthController from "../controllers/AuthController";
import AuthMiddleware from "../middlewares/AuthMiddleware";

const router = Router();

// Define routes
router.post(
  "/join",
  AuthMiddleware.registrationCheckCredentials,
  AuthController.registerUser
);

export default router