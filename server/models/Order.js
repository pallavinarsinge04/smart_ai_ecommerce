import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: Array,
    totalPrice: Number,
    status: {
      type: String,
      default: "Processing",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);