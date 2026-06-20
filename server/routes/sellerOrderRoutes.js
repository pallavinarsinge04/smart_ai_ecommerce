
import express from "express";

import {

getSellerOrders,

updateStatus

} from "../controllers/sellerOrderController.js";

const router=express.Router();

router.get("/",getSellerOrders);

router.put("/:id",updateStatus);

export default router;
