
import Product from "../models/Product.js";

export const getRecommendations = async (productId) => {

  const current = await Product.findById(productId);

  if (!current) return [];

  const products = await Product.find({
    category: current.category,
    _id: { $ne: productId },
  }).limit(4);

  return products;
};

export const getTrendingProducts = async () => {

  return await Product.find()
    .sort({ createdAt: -1 })
    .limit(8);

};
