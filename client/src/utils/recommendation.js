export const getRecommendations = (products, currentProduct) => {
  return products
    .filter(
      (item) =>
        item.category === currentProduct.category &&
        item._id !== currentProduct._id
    )
    .slice(0, 4);
};