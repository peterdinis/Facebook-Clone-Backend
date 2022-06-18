import UserModel from "../models/UserModel";
import bcrypt from "bcrypt";
import {Request, Response} from "express";

export const getUser = async (req: Request, res: Response) => {
    const id = req.params.id;
  
    try {
      // TODO: Later create interface
      const user: any = await UserModel.findById(id);
  
      if (user) {
        const { password, ...otherDetails } = user._doc;
  
        res.status(200).json(otherDetails);
      } else {
        res.status(404).json("No such user exists");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };