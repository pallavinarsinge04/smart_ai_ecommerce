export const calculatePrice = (basePrice, demand) => {

    let price = basePrice;

    if (demand > 80) price *= 1.2;  // high demand
    else if (demand < 30) price *= 0.9; // low demand

    return Math.round(price);
};