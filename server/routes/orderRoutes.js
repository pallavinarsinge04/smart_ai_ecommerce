import express from "express";

import {
    createOrder,
    getUserOrders,
    getAllOrders,
    updateOrderStatus,
    cancelOrder
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/user/:userId", getUserOrders);
router.get("/admin/all", getAllOrders);
router.put("/:id/status", updateOrderStatus);
router.put("/:id/cancel", cancelOrder);

export default router;