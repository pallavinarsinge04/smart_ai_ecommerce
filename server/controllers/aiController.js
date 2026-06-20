import { recommendProducts } from "../ai/recommendationEngine.js";
import { calculatePrice } from "../ai/pricingEngine.js";
import { detectFraud } from "../ai/fraudDetection.js";
import { analyzeBusiness } from "../ai/analyticsAI.js";

export const getRecommendations = (req, res) => {
    const data = recommendProducts([], req.body.products);
    res.json(data);
};

export const getPrice = (req, res) => {
    const { basePrice, demand } = req.body;
    res.json({ price: calculatePrice(basePrice, demand) });
};

export const checkFraud = (req, res) => {
    res.json(detectFraud(req.body));
};

export const getAnalyticsAI = (req, res) => {
    res.json(analyzeBusiness(req.body.orders));
};