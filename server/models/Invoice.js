
import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({

order:{
type:mongoose.Schema.Types.ObjectId,
ref:"Order"
},

customerName:String,

email:String,

items:Array,

subtotal:Number,

gst:Number,

shipping:Number,

total:Number,

status:{
type:String,
default:"Generated"
}

},{
timestamps:true
});

export default mongoose.model("Invoice",invoiceSchema);

