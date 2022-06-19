import mongoose from "mongoose";
import { IChat } from "../types/IChat";

const ChatSchema = new mongoose.Schema<IChat>(
    {
      members: {
        type: Array,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const ChatModel = mongoose.model("TChat", ChatSchema);
  export default ChatModel;