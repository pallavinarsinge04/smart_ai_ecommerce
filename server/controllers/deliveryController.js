
import DeliveryPartner from "../models/DeliveryPartner.js";

export const registerPartner = async(req,res)=>{

    const partner = await DeliveryPartner.create(req.body);

    res.status(201).json(partner);

};

export const getPartners = async(req,res)=>{

    const partners = await DeliveryPartner.find();

    res.json(partners);

};

export const updateAvailability = async(req,res)=>{

    const partner = await DeliveryPartner.findByIdAndUpdate(

        req.params.id,

        {

            available:req.body.available

        },

        {

            new:true

        }

    );

    res.json(partner);

};
