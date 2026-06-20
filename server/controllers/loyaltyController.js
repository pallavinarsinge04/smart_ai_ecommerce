
import Loyalty from "../models/Loyalty.js";

// GET USER LOYALTY
export const getLoyalty = async (req, res) => {
    const data = await Loyalty.findOne({ user: req.params.userId });
    res.json(data);
};

// ADD POINTS AFTER PURCHASE
export const addPoints = async (req, res) => {
    const { userId, amount } = req.body;

    let loyalty = await Loyalty.findOne({ user: userId });

    if (!loyalty) {
        loyalty = await Loyalty.create({ user: userId });
    }

    loyalty.points += Math.floor(amount / 100); // 1 point per 100₹
    loyalty.totalSpent += amount;

    // LEVEL SYSTEM
    if (loyalty.points > 500) loyalty.level = "Gold";
    else if (loyalty.points > 200) loyalty.level = "Silver";

    await loyalty.save();

    res.json(loyalty);
};

// REDEEM POINTS
export const redeemPoints = async (req, res) => {
    const { userId, points } = req.body;

    const loyalty = await Loyalty.findOne({ user: userId });

    if (loyalty.points < points) {
        return res.status(400).json({ message: "Not enough points" });
    }

    loyalty.points -= points;

    await loyalty.save();

    res.json(loyalty);
};
