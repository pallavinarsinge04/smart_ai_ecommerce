import { botEngine } from "../ai/botEngine.js";

export const chatResponse = async (req, res) => {
    const { message } = req.body;

    const reply = botEngine(message);

    res.json({ reply });
};