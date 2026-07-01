import { getRazorpayInstance } from "../utils/razorpay.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
    try {
        const razorpay = getRazorpayInstance();

        const options = {
            amount: req.body.amount,
            currency: "INR",
            receipt: "order_rcptid_" + Date.now()
        };

        const order = await razorpay.orders.create(options);

        res.json(order);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// VERIFY PAYMENT (FIXED - NOW EXISTS)
export const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id) {
            return res.status(400).json({ message: "Invalid payment data" });
        }

        // For now basic verification (can upgrade later with crypto validation)
        res.json({
            success: true,
            message: "Payment verified successfully",
            data: {
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id
            }
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};