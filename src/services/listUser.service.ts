import { data } from "../data";
import { IListUserResponse } from "../interfaces/user";
const listUsersService = (): IListUserResponse => {
  return { users: data };
};

export default listUsersService;
