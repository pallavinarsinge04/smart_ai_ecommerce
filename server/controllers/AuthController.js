const User=require("../models/User");

const bcrypt=require("bcryptjs");

const jwt=require("jsonwebtoken");

exports.register=async(req,res)=>{

try{

const {name,email,password}=req.body;

const exist=await User.findOne({email});

if(exist){

return res.status(400).json({

message:"User already exists"

});

}

const hash=await bcrypt.hash(password,10);

const user=await User.create({

name,

email,

password:hash

});

res.status(201).json({

message:"Registration successful"

});

}

catch(error){

res.status(500).json(error);

}

}