
import Product from "../models/Product.js";
import User from "../models/User.js";
import Order from "../models/Order.js";

export const getAnalytics = async (req, res) => {

  try {

    const totalProducts = await Product.countDocuments();

    const totalUsers = await User.countDocuments();

    const totalOrders = await Order.countDocuments();

    const orders = await Order.find();

    const revenue = orders.reduce(
      (sum, order) => sum + order.totalAmount,
      0
    );

    res.json({
      totalProducts,
      totalUsers,
      totalOrders,
      revenue,
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};
