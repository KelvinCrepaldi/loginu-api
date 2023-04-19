import { Request, Response } from "express";
import { AppError, handleError } from "../errors/appErrors";

import loginUserService from "../services/loginUser.service";

const createUserSessionController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = loginUserService({ email, password });

    return res.status(200).json({ token });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export { createUserSessionController };
