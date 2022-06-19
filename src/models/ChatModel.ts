import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
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