import createUserController from "../controllers/createUser.controller";
import loginUserController from "../controllers/loginUser.controler";
import getUsersController from "../controllers/getUsers.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import deleteUserController from "../controllers/deleteUser.controller";

import { Router } from "express";

const routes = Router();

routes.post("", createUserController);
routes.post("/login", loginUserController);
routes.get("", verifyAuthTokenMiddleware, getUsersController);
routes.delete("/:id",verifyAuthTokenMiddleware, deleteUserController)

export default routes;