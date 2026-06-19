
import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    sender: String,
    receiver: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Chat", chatSchema);
