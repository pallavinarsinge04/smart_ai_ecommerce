
import Inventory from "../models/Inventory.js";

export const getInventory=async(req,res)=>{

    const items=await Inventory.find().populate("product");

    res.json(items);

}

export const addStock=async(req,res)=>{

    const item=await Inventory.findById(req.params.id);

    item.stock+=req.body.quantity;

    await item.save();

    res.json(item);

}

export const removeStock=async(req,res)=>{

    const item=await Inventory.findById(req.params.id);

    item.stock-=req.body.quantity;

    await item.save();

    res.json(item);

}
