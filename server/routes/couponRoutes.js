
import express from "express";

import {
    createCoupon,
    applyCoupon,
    createGiftCard,
    redeemGiftCard
} from "../controllers/couponController.js";

const router = express.Router();

router.post("/create", createCoupon);
router.post("/apply", applyCoupon);
router.post("/gift/create", createGiftCard);
router.post("/gift/redeem", redeemGiftCard);

export default router;

