
import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    shopName: {
      type: String,
      required: true,
    },

    phone: String,

    address: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Seller", sellerSchema);
