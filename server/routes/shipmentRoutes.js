
import express from "express";

import {

createShipment,

getShipment,

updateShipment

}

from "../controllers/shipmentController.js";

const router = express.Router();

router.post("/",createShipment);

router.get("/:id",getShipment);

router.put("/:id",updateShipment);

export default router;
