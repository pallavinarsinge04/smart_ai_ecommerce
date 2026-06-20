
import mongoose from "mongoose";

const loyaltySchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    points:{
        type:Number,
        default:0
    },

    level:{
        type:String,
        enum:["Bronze","Silver","Gold"],
        default:"Bronze"
    },

    totalSpent:{
        type:Number,
        default:0
    }

},{
    timestamps:true
});

export default mongoose.model("Loyalty",loyaltySchema);

