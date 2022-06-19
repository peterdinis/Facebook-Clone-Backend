import PostModel from "../models/PostModel";
import {Response, Request} from "express";
import mongoose from "mongoose";
import UserModel from "../models/UserModel";

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



export const updatePost = async (req: Request, res: Response) => {
  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(postId);
    if (post!.userId === userId) {
      await post!.updateOne({ $set: req.body });
      res.status(200).json("Post Updated");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


export const deletePost = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(id);
    if (post!.userId === userId) {
      await post!.deleteOne();
      res.status(200).json("POst deleted successfully");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const likePost = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post: any = await PostModel.findById(id);
    if (!post.likes.includes(userId)) {
      await post!.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked");
    } else {
      await post!.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post Unliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTimelinePosts = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const currentUserPosts = await PostModel.find({ userId: userId });
    const followingPosts = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    res
      .status(200)
      .json(currentUserPosts.concat(...followingPosts[0].followingPosts)
      .sort((a,b)=>{
          return b.createdAt - a.createdAt;
      })
      );
  } catch (error) {
    res.status(500).json(error);
  }
};