export const detectFraud = (order) => {

    let riskScore = 0;

    if (order.amount > 50000) riskScore += 40;
    if (order.location === "unknown") riskScore += 30;
    if (order.paymentMethod === "COD") riskScore += 10;

    return {
        riskScore,
        isFraud: riskScore > 60
    };
};