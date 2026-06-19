
export const chatAI = async (req, res) => {

  const { message } = req.body;

  let reply = "";

  if (message.toLowerCase().includes("phone")) {

    reply =
      "Recommended: iPhone 16, Samsung S25, Nothing Phone 3";

  } else if (
    message.toLowerCase().includes("laptop")
  ) {

    reply =
      "Recommended: MacBook Air, Dell XPS, Lenovo Legion";

  } else if (
    message.toLowerCase().includes("under 50000")
  ) {

    reply =
      "Best options under ₹50,000: Redmi Note, Realme GT, Moto Edge";

  } else {

    reply =
      "Please tell me your budget or category for better recommendations.";

  }

  res.json({
    answer: reply,
  });

};
