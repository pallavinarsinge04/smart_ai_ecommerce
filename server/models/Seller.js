
import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        unique:true
    },

    password:{
        type:String
    },

    shopName:{
        type:String
    },

    verified:{
        type:Boolean,
        default:false
    },

    earnings:{
        type:Number,
        default:0
    }

},{
    timestamps:true
});

export default mongoose.model("Seller",sellerSchema);
