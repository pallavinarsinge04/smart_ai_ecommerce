
import Coupon from "../models/Coupon.js";
import GiftCard from "../models/GiftCard.js";

// CREATE COUPON
export const createCoupon = async (req, res) => {
    const coupon = await Coupon.create(req.body);
    res.status(201).json(coupon);
};

// APPLY COUPON
export const applyCoupon = async (req, res) => {
    const { code, total } = req.body;

    const coupon = await Coupon.findOne({ code });

    if (!coupon) {
        return res.status(404).json({ message: "Invalid Coupon" });
    }

    if (new Date(coupon.expiryDate) < new Date()) {
        return res.status(400).json({ message: "Coupon expired" });
    }

    if (coupon.usedCount >= coupon.usageLimit) {
        return res.status(400).json({ message: "Coupon limit reached" });
    }

    let discount = 0;

    if (coupon.discountType === "percentage") {
        discount = (total * coupon.discountValue) / 100;
    } else {
        discount = coupon.discountValue;
    }

    coupon.usedCount += 1;
    await coupon.save();

    res.json({
        total,
        discount,
        finalAmount: total - discount
    });
};

// CREATE GIFT CARD
export const createGiftCard = async (req, res) => {
    const card = await GiftCard.create(req.body);
    res.status(201).json(card);
};

// REDEEM GIFT CARD
export const redeemGiftCard = async (req, res) => {
    const { code, amount } = req.body;

    const card = await GiftCard.findOne({ code });

    if (!card || card.isUsed) {
        return res.status(400).json({ message: "Invalid Gift Card" });
    }

    if (card.expiryDate < new Date()) {
        return res.status(400).json({ message: "Gift Card expired" });
    }

    const remaining = card.balance - amount;

    if (remaining <= 0) {
        card.balance = 0;
        card.isUsed = true;
    } else {
        card.balance = remaining;
    }

    await card.save();

    res.json({
        message: "Gift card applied",
        remainingBalance: card.balance
    });
};
