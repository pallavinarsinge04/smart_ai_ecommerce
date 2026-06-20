
import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        unique:true
    },

    phone:String,

    vehicleType:String,

    vehicleNumber:String,

    earnings:{
        type:Number,
        default:0
    },

    rating:{
        type:Number,
        default:5
    },

    available:{
        type:Boolean,
        default:true
    }

},{
    timestamps:true
});

export default mongoose.model(
    "DeliveryPartner",
    deliverySchema
);
