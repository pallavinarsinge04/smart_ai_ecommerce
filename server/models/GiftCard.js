
import mongoose from "mongoose";

const giftCardSchema = new mongoose.Schema({

    code:{
        type:String,
        unique:true
    },

    balance:Number,

    expiryDate:Date,

    isUsed:{
        type:Boolean,
        default:false
    }

},{
    timestamps:true
});

export default mongoose.model("GiftCard",giftCardSchema);

