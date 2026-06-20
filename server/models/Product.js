
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    seller:{

        type:mongoose.Schema.Types.ObjectId,

        ref:"Seller"

    },

    name:{

        type:String,

        required:true

    },

    description:String,

    price:Number,

    stock:Number,

    image:String,

    category:String

},{
    timestamps:true
});

export default mongoose.model("Product",productSchema);
