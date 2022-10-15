import data from "../data";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../data/config";
import {v4 as uuidv4} from "uuid";

const createUserService = async (email, name, password)=>{

    const userAlreadyExists = data.find((user)=> user.email === email);

    if(userAlreadyExists){
        return {error: "User email is already in use."};
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

    data.push(newUser);
    

    const token = jwt.sign({email: email}, config.secret_key, {expiresIn: "1h"});

    return {msg: "user created", user: newUser, token: token};

}

export default createUserService;