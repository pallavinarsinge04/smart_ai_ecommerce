
import Notification from "../models/Notification.js";

export const getNotifications=async(req,res)=>{

const data=await Notification.find();

res.json(data);

};

export const addNotification=async(req,res)=>{

const notification=await Notification.create(req.body);

res.json(notification);

};

export const markRead=async(req,res)=>{

await Notification.findByIdAndUpdate(

req.params.id,

{

read:true

}

);

res.json({

message:"Updated"

});

};
