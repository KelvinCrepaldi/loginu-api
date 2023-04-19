import { data, setData } from "../data";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../data/config";
import { v4 as uuidv4 } from "uuid";
import { ICreateUserRequest, ICreateUserResponse } from "../interfaces/user";
import { AppError } from "../errors/appErrors";
import "dotenv/config";

const createUserService = async ({
  email,
  name,
  password,
}: ICreateUserRequest): Promise<ICreateUserResponse> => {
  const userAlreadyExists = data.find((user) => user.email === email);

  if (userAlreadyExists) {
    throw new AppError(409, "User already exists");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const date = new Date(Date.now()).toISOString();

  const newUser = {
    id: uuidv4(),
    email: email,
    name: name,
    password: hashPassword,
    created_at: date,
  };

  const newData = data;
  newData.push(newUser);
  setData(newData);

  const token = jwt.sign({ id: newUser.id }, process.env.SECRET_KEY as string, {
    expiresIn: "1h",
  });

  return { msg: "user created", user: newUser, token: token };
};

export default createUserService;
