
import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({

code:{
type:String,
unique:true,
required:true
},

discount:{
type:Number,
required:true
},

type:{
type:String,
enum:["percent","flat"],
default:"percent"
},

minimumAmount:{
type:Number,
default:0
},

expiry:{
type:Date
},

active:{
type:Boolean,
default:true
}

},{
timestamps:true
});

export default mongoose.model("Coupon",couponSchema);
