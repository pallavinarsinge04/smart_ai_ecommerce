
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {

    res.json({

        revenue: 850000,

        orders: 1240,

        users: 640,

        products: 180,

        monthlySales: [

            { month: "Jan", sales: 100 },

            { month: "Feb", sales: 250 },

            { month: "Mar", sales: 380 },

            { month: "Apr", sales: 500 },

            { month: "May", sales: 620 },

            { month: "Jun", sales: 810 }

        ]

    });

});

export default router;
