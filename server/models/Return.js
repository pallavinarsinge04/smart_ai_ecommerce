
import mongoose from "mongoose";

const returnSchema = new mongoose.Schema({

    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    reason:String,

    image:String,

    refundAmount:Number,

    status:{
        type:String,
        default:"Pending"
    }

},{
    timestamps:true
});

export default mongoose.model("Return",returnSchema);
