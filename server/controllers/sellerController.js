
import Seller from "../models/Seller.js";

export const registerSeller=async(req,res)=>{

const seller=await Seller.create(req.body);

res.status(201).json(seller);

};

export const getSellers=async(req,res)=>{

const sellers=await Seller.find();

res.json(sellers);

};

export const verifySeller=async(req,res)=>{

const seller=await Seller.findByIdAndUpdate(

req.params.id,

{

verified:true

},

{

new:true

}

);

res.json(seller);

};
