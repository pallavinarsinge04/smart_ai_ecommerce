export const botEngine = (message) => {
    message = message.toLowerCase();

    // ORDER QUERY
    if (message.includes("order")) {
        return "📦 You can track your order in the Orders section of your dashboard.";
    }

    // REFUND
    if (message.includes("refund")) {
        return "💰 Refunds are processed within 5-7 business days.";
    }

    // PRODUCT
    if (message.includes("product")) {
        return "🛍️ You can browse products in the Products section.";
    }

    // GREETING
    if (message.includes("hello") || message.includes("hi")) {
        return "👋 Hello! How can I help you today?";
    }

    // DEFAULT
    return "🤖 I'm your AI assistant. Please ask about orders, products, or support.";
};