
export const getRecommendations = async (req, res) => {

    const recommendations = [

        {
            id:1,
            name:"MacBook Air M3",
            price:114999,
            image:"https://via.placeholder.com/250"
        },

        {
            id:2,
            name:"iPhone 15 Pro",
            price:129999,
            image:"https://via.placeholder.com/250"
        },

        {
            id:3,
            name:"Sony WH1000XM5",
            price:27999,
            image:"https://via.placeholder.com/250"
        },

        {
            id:4,
            name:"Apple Watch Ultra",
            price:89999,
            image:"https://via.placeholder.com/250"
        }

    ];

    res.json(recommendations);

};
