import PostModel from "../models/PostModel";
import mongoose from "mongoose";
import {Response, Request} from "express";

export const createPost = async (req: Request, res: Response) => {
    const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json("Post created!");
  } catch (error) {
    res.status(500).json(error);
  }
}

export const getPost = async (req: Request, res: Response) => {
    const id = req.params.id;
  
    try {
      const post = await PostModel.findById(id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  };