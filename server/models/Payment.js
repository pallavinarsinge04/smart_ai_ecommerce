
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    orderId: String,
    paymentId: String,
    amount: Number,
    status: String,
    userId: String,
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
