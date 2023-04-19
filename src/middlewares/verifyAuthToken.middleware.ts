import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyAuthTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Missing token." });
  }

  const splitToken = token.split(" ")[1];

  jwt.verify(
    splitToken,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({ error: "invalid token." });
      }
      req.user = { id: decoded.id };
    }
  );
  next();
};

export default verifyAuthTokenMiddleware;
