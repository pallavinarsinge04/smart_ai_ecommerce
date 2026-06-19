
import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({

    product:{

        type:mongoose.Schema.Types.ObjectId,

        ref:"Product"

    },

    stock:{

        type:Number,

        default:0

    },

    warehouse:{

        type:String

    },

    lowStockLimit:{

        type:Number,

        default:5

    }

},
{
    timestamps:true
});

export default mongoose.model("Inventory",inventorySchema);
