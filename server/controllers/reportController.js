
export const getReports = async (req, res) => {

    res.json({

        totalRevenue: 1450000,

        totalOrders: 1245,

        totalUsers: 785,

        totalProducts: 320,

        totalProfit: 285000,

        topProducts: [

            {

                name: "iPhone 15",

                sold: 152

            },

            {

                name: "Samsung S24",

                sold: 131

            },

            {

                name: "MacBook Air",

                sold: 87

            }

        ]

    });

};

