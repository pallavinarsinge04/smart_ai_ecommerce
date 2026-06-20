import express from "express";
import {
    getRecommendations,
    getPrice,
    checkFraud,
    getAnalyticsAI
} from "../controllers/aiController.js";

const router = express.Router();

router.post("/recommend", getRecommendations);
router.post("/price", getPrice);
router.post("/fraud", checkFraud);
router.post("/analytics", getAnalyticsAI);

export default router;