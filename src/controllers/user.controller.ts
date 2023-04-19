import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";

import createUserService from "../services/createUser.service";
import deleteUserService from "../services/deleteUser.service";
import listUsersService from "../services/listUser.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { email, name, password } = req.body;

    const user = await createUserService({ email, name, password });

    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id = req.user.id;
    const deleteUser = deleteUserService(id);

    return res.status(200).json(deleteUser);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

const listUsersController = async (req: Request, res: Response) => {
  try {
    const users = listUsersService();

    return res.status(200).json(users);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export { createUserController, deleteUserController, listUsersController };
