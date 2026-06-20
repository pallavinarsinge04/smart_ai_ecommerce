import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    products: [
        {
            productId: String,
            name: String,
            price: Number,
            quantity: Number
        }
    ],

    totalAmount: Number,

    paymentStatus: {
        type: String,
        default: "Paid"
    },

    orderStatus: {
        type: String,
        default: "Pending"
    },

    shippingAddress: String

}, {
    timestamps: true
});

export default mongoose.model("Order", orderSchema);