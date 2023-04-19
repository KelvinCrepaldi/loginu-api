export interface IUser {
  id: string;
  email: string;
  name: string;
  password: string;
  created_at: string;
}

export interface IUserLoginRequest {
  email: string;
  password: string;
}

export interface ICreateUserRequest {
  email: string;
  name: string;
  password: string;
}

export interface ICreateUserResponse {
  msg: string;
  user: IUser;
  token: string;
}

export interface IDeleteUserResponse {
  msg: string;
}

export interface IListUserResponse {
  users: IUser[];
}
