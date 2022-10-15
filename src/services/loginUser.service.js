import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import data from "../data";
import config from "../data/config";

const loginUserService = (email, password) =>{

    const user = data.find((user)=> user.email === email);

    if(!user){
        return {error: "user not found."}
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if(!passwordMatch){
        return {error: "password is incorrect"}
    }

    const token = jwt.sign({email: email}, config.secret_key, {expiresIn: "1h"});

    return {
        token: token
    }

}

export default loginUserService;