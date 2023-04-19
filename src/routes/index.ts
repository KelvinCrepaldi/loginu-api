import { Router } from "express";

import {
  createUserController,
  deleteUserController,
  listUsersController,
} from "../controllers/user.controller";
import { createUserSessionController } from "../controllers/session.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const routes = Router();

routes.post("", createUserController);
routes.post("/login", createUserSessionController);
routes.get("", verifyAuthTokenMiddleware, listUsersController);
routes.delete("", verifyAuthTokenMiddleware, deleteUserController);

export default routes;
