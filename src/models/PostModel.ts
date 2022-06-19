import mongoose from "mongoose";
import {IPost} from "../types/IPost"

const postSchema = new mongoose.Schema<IPost>(
  {
    userId: { type: String, required: true },
    desc: String,
    likes: [],
    image: String,
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("TPosts", postSchema);
export default PostModel;