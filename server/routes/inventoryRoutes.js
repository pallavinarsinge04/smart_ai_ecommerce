
import express from "express";

import {
  getInventory,
  updateStock,
} from "../controllers/inventoryController.js";

const router = express.Router();

router.get("/", getInventory);

router.put("/:id", updateStock);

export default router;
