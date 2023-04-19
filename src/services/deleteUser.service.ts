import { data, setData } from "../data";
import { AppError } from "../errors/appErrors";
import { IUser, IDeleteUserResponse } from "../interfaces/user";

const deleteUserService = (id: string): IDeleteUserResponse => {
  const user = data.find((user) => user.id === id);

  if (!user) {
    throw new AppError(404, "User not found");
  }

  const filterData: IUser[] = data.filter((user) => user.id !== id);

  setData(filterData);

  return { msg: "user deleted" };
};

export default deleteUserService;
