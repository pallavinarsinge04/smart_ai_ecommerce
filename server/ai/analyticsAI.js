export const analyzeBusiness = (orders) => {

    const revenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);

    const avgOrder = revenue / orders.length;

    return {
        revenue,
        totalOrders: orders.length,
        avgOrderValue: avgOrder,
        growthPrediction: revenue * 1.15
    };
};