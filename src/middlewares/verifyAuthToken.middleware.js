import jwt from "jsonwebtoken"
import config from "../data/config";

const verifyAuthTokenMiddleware = (req, res, next) =>{

    let token = req.headers.authorization;

    if(!token){
        return res.status(401).json({error: "Missing token."})
    }

    token = token.split(" ")[1];

    jwt.verify(token, config.secret_key, (error, decoded)=>{
        if(error){
            return res.status(401).json({error: "invalid token."})
        }
    })

    next();
}

export default verifyAuthTokenMiddleware;