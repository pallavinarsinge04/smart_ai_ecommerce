
import Shipment from "../models/Shipment.js";

export const createShipment = async(req,res)=>{

    const shipment = await Shipment.create(req.body);

    res.status(201).json(shipment);

};

export const getShipment = async(req,res)=>{

    const shipment = await Shipment.findOne({

        trackingId:req.params.id

    });

    res.json(shipment);

};

export const updateShipment = async(req,res)=>{

    const shipment = await Shipment.findByIdAndUpdate(

        req.params.id,

        req.body,

        {

            new:true

        }

    );

    res.json(shipment);

};
