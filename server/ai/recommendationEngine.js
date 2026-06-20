export const recommendProducts = (userHistory, products) => {

    // SIMPLE AI LOGIC (can upgrade to ML later)

    return products
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
};