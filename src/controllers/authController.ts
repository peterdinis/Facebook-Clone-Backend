import UserModel from "../models/UserModel";
import bcrypt from "bcrypt";
import {Request, Response} from "express";

// Registering a new User
export const registerUser = async (req: Request, res: Response) => {
  const { username, password, firstname, lastname } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    username,
    password: hashedPass,
    firstname,
    lastname,
  });

  try {
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error });
  }
};


// login User

export const loginUser = async (req: Request, res: Response) => {
    const {username, password} = req.body

    try {
        const user = await UserModel.findOne({username: username})


        if(user)
        {
            const validity = await bcrypt.compare(password, user.password)


            validity? res.json(user): res.status(400).json("Wrong Password")
        }
        else{
            res.status(404).json("User does not exists")
        }
    } catch (error) {
        res.status(500).json({ error });
    }
}