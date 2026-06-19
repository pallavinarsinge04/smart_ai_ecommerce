
import client from "../config/openai.js";

export const chatAI = async (req, res) => {

    try {

        const completion = await client.chat.completions.create({

            model: "gpt-4o-mini",

            messages: [

                {

                    role: "system",

                    content:
                        "You are an AI shopping assistant for an ecommerce website.",

                },

                {

                    role: "user",

                    content: req.body.message,

                },

            ],

        });

        res.json({

            reply: completion.choices[0].message.content,

        });

    } catch (err) {

        res.status(500).json({

            message: err.message,

        });

    }

};
