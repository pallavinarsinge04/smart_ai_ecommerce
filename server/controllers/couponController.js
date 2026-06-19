
import Coupon from "../models/Coupon.js";

export const createCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.create(req.body);
    res.status(201).json(coupon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCoupons = async (req, res) => {
  const coupons = await Coupon.find();
  res.json(coupons);
};

export const applyCoupon = async (req, res) => {
  const { code, total } = req.body;

  const coupon = await Coupon.findOne({
    code,
    active: true,
  });

  if (!coupon) {
    return res.status(404).json({
      message: "Invalid Coupon",
    });
  }

  if (new Date() > coupon.expiryDate) {
    return res.status(400).json({
      message: "Coupon Expired",
    });
  }

  if (total < coupon.minAmount) {
    return res.status(400).json({
      message: "Minimum amount not reached",
    });
  }

  let discount = 0;

  if (coupon.type === "percentage") {
    discount = (total * coupon.discount) / 100;
  } else {
    discount = coupon.discount;
  }

  res.json({
    discount,
    finalAmount: total - discount,
  });
};
