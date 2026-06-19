
import Seller from "../models/Seller.js";
import bcrypt from "bcryptjs";

export const registerSeller = async (req, res) => {

  const hashed = await bcrypt.hash(req.body.password, 10);

  const seller = await Seller.create({
    ...req.body,
    password: hashed,
  });

  res.status(201).json(seller);

};

export const getSellers = async (req, res) => {

  const sellers = await Seller.find();

  res.json(sellers);

};
