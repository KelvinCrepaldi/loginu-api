import { IUser } from "../interfaces/user";

let data: IUser[] = [
  {
    id: "bda38ad8-efac-4ba2-8073-b3f361100e3e",
    email: "admin@mail.com",
    name: "admin",
    password: "$2b$10$hPPEVC/ZubvcAyQDfoUGUeowBtW1g.pRZOaSDY3kxTqN9Bi0DsP6O",
    created_at: "2022-10-18T07:09:14.180Z",
  },
  {
    id: "d083c9d0-77ca-4b7e-9b3e-8a8ce03a9707",
    email: "pinguim@mail.com",
    name: "pinguim",
    password: "$2b$10$VqlDtghXTTvpxxhqwC6Q5uK0PxGfdxqJjBKCubFUvgkpzvuTnFgT.",
    created_at: "2022-10-18T07:09:33.279Z",
  },
  {
    id: "cc19f9be-2565-4940-bbe9-92586a8ae7a6",
    email: "fuinha@mail.com",
    name: "fuinha",
    password: "$2b$10$AMJdRXf6uH4RH5wpfrrUz.qD5175moSCazFUwmROMWBmOu83V8F26",
    created_at: "2022-10-18T07:09:43.823Z",
  },
];

const setData = (newData: IUser[]) => {
  data = newData;
};

export { data, setData };
