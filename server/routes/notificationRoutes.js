
import express from "express";

import {

getNotifications,

addNotification,

markRead

} from "../controllers/notificationController.js";

const router=express.Router();

router.get("/",getNotifications);

router.post("/",addNotification);

router.put("/:id",markRead);

export default router;
