
import Return from "../models/Return.js";

export const createReturn = async(req,res)=>{

    const request = await Return.create(req.body);

    res.status(201).json(request);

};

export const getReturns = async(req,res)=>{

    const returns = await Return.find()
    .populate("user")
    .populate("order");

    res.json(returns);

};

export const approveReturn = async(req,res)=>{

    const request = await Return.findByIdAndUpdate(

        req.params.id,

        {

            status:"Approved"

        },

        {

            new:true

        }

    );

    res.json(request);

};

export const rejectReturn = async(req,res)=>{

    const request = await Return.findByIdAndUpdate(

        req.params.id,

        {

            status:"Rejected"

        },

        {

            new:true

        }

    );

    res.json(request);

};
