
import Notification from "../models/Notification.js";

export const createNotification=async(req,res)=>{

const notification=await Notification.create(req.body);

res.status(201).json(notification);

};

export const getNotifications=async(req,res)=>{

const notifications=await Notification.find()

.sort({createdAt:-1});

res.json(notifications);

};

export const markAsRead=async(req,res)=>{

const notification=await Notification.findByIdAndUpdate(

req.params.id,

{

read:true

},

{

new:true

}

);

res.json(notification);

};
