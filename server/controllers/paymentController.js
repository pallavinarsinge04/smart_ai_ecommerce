
import Payout from "../models/Payout.js";

export const createRequest=async(req,res)=>{

const payout=await Payout.create(req.body);

res.status(201).json(payout);

};

export const getRequests=async(req,res)=>{

const payouts=await Payout.find();

res.json(payouts);

};

export const approveRequest=async(req,res)=>{

const payout=await Payout.findByIdAndUpdate(

req.params.id,

{

status:"Approved"

},

{

new:true

}

);

res.json(payout);

};
