import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { data } from "../data";
import "dotenv/config";
import { AppError } from "../errors/appErrors";
import { IUserLoginRequest } from "../interfaces/user";

const loginUserService = ({ email, password }: IUserLoginRequest): string => {
  const user = data.find((user) => user.email === email);

  if (!user) {
    throw new AppError(404, "User not found");
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    throw new AppError(403, "Invalid credentials");
  }

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY as string, {
    expiresIn: process.env.TOKEN_EXPIRES_IN,
  });

  return token;
};

export default loginUserService;
