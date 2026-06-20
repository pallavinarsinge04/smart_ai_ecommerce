import Order from "../models/Order.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET USER ORDERS
export const getUserOrders = async (req, res) => {
    const orders = await Order.find({ user: req.params.userId });
    res.json(orders);
};

// GET ALL ORDERS (ADMIN)
export const getAllOrders = async (req, res) => {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
};

// UPDATE ORDER STATUS
export const updateOrderStatus = async (req, res) => {
    const order = await Order.findByIdAndUpdate(
        req.params.id,
        { orderStatus: req.body.status },
        { new: true }
    );
    res.json(order);
};

// CANCEL ORDER
export const cancelOrder = async (req, res) => {
    const order = await Order.findByIdAndUpdate(
        req.params.id,
        { orderStatus: "Cancelled" },
        { new: true }
    );
    res.json(order);
};