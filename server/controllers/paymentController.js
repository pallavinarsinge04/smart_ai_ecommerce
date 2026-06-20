
import { razorpay } from "../utils/razorpay.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
    try {
        const { amount } = req.body;

        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: "order_rcptid_" + Date.now()
        };

        const order = await razorpay.orders.create(options);

        res.json(order);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// VERIFY PAYMENT (simple version)
export const verifyPayment = async (req, res) => {
    try {
        const { paymentId, orderId } = req.body;

        // In real system verify signature here

        res.json({
            success: true,
            message: "Payment Verified",
            paymentId,
            orderId
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

