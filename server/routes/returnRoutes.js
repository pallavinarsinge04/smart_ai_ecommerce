
import express from "express";

import {

createReturn,

getReturns,

approveReturn,

rejectReturn

}

from "../controllers/returnController.js";

const router = express.Router();

router.post("/",createReturn);

router.get("/",getReturns);

router.put("/approve/:id",approveReturn);

router.put("/reject/:id",rejectReturn);

export default router;

