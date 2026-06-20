
import Coupon from "../models/Coupon.js";

export const createCoupon=async(req,res)=>{

const coupon=await Coupon.create(req.body);

res.status(201).json(coupon);

};

export const getCoupons=async(req,res)=>{

const coupons=await Coupon.find();

res.json(coupons);

};

export const applyCoupon=async(req,res)=>{

const {code,total}=req.body;

const coupon=await Coupon.findOne({code});

if(!coupon){

return res.status(404).json({
message:"Invalid Coupon"
});

}

if(new Date()>coupon.expiry){

return res.status(400).json({
message:"Coupon Expired"
});

}

let finalAmount=total;

if(coupon.type==="percent"){

finalAmount=total-(total*coupon.discount/100);

}else{

finalAmount=total-coupon.discount;

}

res.json({

discount:coupon.discount,

finalAmount

});

};
