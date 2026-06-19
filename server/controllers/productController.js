
import Product from "../models/Product.js";

export const searchProducts = async (req, res) => {

  try {

    const keyword = req.query.keyword || "";

    const category = req.query.category || "";

    const sort = req.query.sort || "";

    let query = {};

    if (keyword) {
      query.name = {
        $regex: keyword,
        $options: "i",
      };
    }

    if (category) {
      query.category = category;
    }

    let products = await Product.find(query);

    if (sort === "low") {
      products.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      products.sort((a, b) => b.price - a.price);
    }

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};
