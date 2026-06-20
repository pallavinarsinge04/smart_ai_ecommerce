
import mongoose from "mongoose";

const payoutSchema = new mongoose.Schema({

    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Seller"
    },

    amount:{
        type:Number,
        required:true
    },

    status:{
        type:String,
        default:"Pending"
    },

    bankName:String,

    accountNumber:String,

    ifsc:String

},{
    timestamps:true
});

export default mongoose.model("Payout",payoutSchema);
