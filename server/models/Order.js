import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer: {
      name: String,
      email: String,
      phone: String,
      address: String,
    },

    items: Array,

    total: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);