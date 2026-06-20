
import express from "express";

import {
    getLoyalty,
    addPoints,
    redeemPoints
} from "../controllers/loyaltyController.js";

const router = express.Router();

router.get("/:userId", getLoyalty);
router.post("/add", addPoints);
router.post("/redeem", redeemPoints);

export default router;
