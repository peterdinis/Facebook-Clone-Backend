import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {Request, Response, NextFunction} from "express"

dotenv.config();
const secret = process.env.JWTKEY;
const authMiddleWare = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (token) {
      const decoded = jwt.verify(token, secret);
      req.body._id = decoded?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default authMiddleWare;