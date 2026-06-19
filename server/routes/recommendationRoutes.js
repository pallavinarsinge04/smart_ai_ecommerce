
import express from "express";

import {
  recommendations,
  trending,
} from "../controllers/recommendationController.js";

const router = express.Router();

router.get("/trending", trending);

router.get("/:id", recommendations);

export default router;
