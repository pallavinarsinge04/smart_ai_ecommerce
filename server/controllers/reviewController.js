
import Review from "../models/Review.js";

export const addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      productId: req.params.id,
    });

    res.json(reviews);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
