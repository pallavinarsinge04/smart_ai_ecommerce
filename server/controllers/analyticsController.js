
import Product from "../models/Product.js";
import User from "../models/User.js";
import Order from "../models/Order.js";

export const getAnalytics = async (req, res) => {
    res.json({
        revenue: 125000,
        orders: 540,
        users: 3200,
        conversionRate: 4.8,
        cartAbandonment: 32
    });
};
