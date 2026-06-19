
import {
  getRecommendations,
  getTrendingProducts,
} from "../services/recommendationService.js";

export const recommendations = async (req, res) => {

  const data = await getRecommendations(req.params.id);

  res.json(data);

};

export const trending = async (req, res) => {

  const data = await getTrendingProducts();

  res.json(data);

};
