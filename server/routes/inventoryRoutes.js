
import express from "express";

import {

getInventory,

addStock,

removeStock

} from "../controllers/inventoryController.js";

const router=express.Router();

router.get("/",getInventory);

router.put("/add/:id",addStock);

router.put("/remove/:id",removeStock);

export default router;
