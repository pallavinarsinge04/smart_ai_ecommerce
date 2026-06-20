
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

seller:{
type:mongoose.Schema.Types.ObjectId,
ref:"Seller"
},

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

products:Array,

total:Number,

status:{
type:String,
default:"Pending"
},

paymentStatus:{
type:String,
default:"Paid"
},

shippingStatus:{
type:String,
default:"Preparing"
}

},{
timestamps:true
});

export default mongoose.model("Order",orderSchema);
