import mongoose from "mongoose";
import { IMessage } from "../types/IMessage";

const MessageSchema = new mongoose.Schema<IMessage>(
    {
      chatId: {
        type: String,
      },
      senderId: {
        type: String,
      },
      text: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const MessageModel = mongoose.model("TMessage", MessageSchema);
  export default MessageModel