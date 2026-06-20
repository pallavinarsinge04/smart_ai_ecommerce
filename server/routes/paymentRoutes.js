
import express from "express";

import {

createRequest,

getRequests,

approveRequest

} from "../controllers/payoutController.js";

const router=express.Router();

router.post("/",createRequest);

router.get("/",getRequests);

router.put("/:id",approveRequest);

export default router;
