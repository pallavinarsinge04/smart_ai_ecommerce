import Order from "../models/Order.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
  const { products, totalPrice } = req.body;

  const order = await Order.create({
    user: req.user._id,
    products,
    totalPrice,
  });

  res.json(order);
};

// GET MY ORDERS
export const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};