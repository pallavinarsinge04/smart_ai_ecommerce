
import express from "express";

import {

registerSeller,

getSellers,

verifySeller

} from "../controllers/sellerController.js";

const router=express.Router();

router.post("/",registerSeller);

router.get("/",getSellers);

router.put("/verify/:id",verifySeller);

export default router;

