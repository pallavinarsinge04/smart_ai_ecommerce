
import express from "express";

import {

registerPartner,

getPartners,

updateAvailability

}

from "../controllers/deliveryController.js";

const router = express.Router();

router.post("/",registerPartner);

router.get("/",getPartners);

router.put("/:id",updateAvailability);

export default router;

