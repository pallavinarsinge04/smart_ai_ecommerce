
import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema({

    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },

    trackingId:{
        type:String,
        unique:true
    },

    courier:String,

    status:{
        type:String,
        default:"Order Confirmed"
    },

    currentLocation:String,

    estimatedDelivery:Date

},{
    timestamps:true
});

export default mongoose.model("Shipment",shipmentSchema);
