
import Order from "../models/Order.js";

export const getSellerOrders=async(req,res)=>{

const orders=await Order.find().populate("user");

res.json(orders);

};

export const updateStatus=async(req,res)=>{

const order=await Order.findByIdAndUpdate(

req.params.id,

{

status:req.body.status,

shippingStatus:req.body.shippingStatus

},

{

new:true

}

);

res.json(order);

};
