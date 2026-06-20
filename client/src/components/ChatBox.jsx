import { useState } from "react";
import { sendMessage } from "../services/chatbotService";

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");

    const send = async () => {
        const userMsg = { sender: "user", text };
        setMessages([...messages, userMsg]);

        const res = await sendMessage(text);

        const botMsg = { sender: "bot", text: res.data.reply };

        setMessages(prev => [...prev, botMsg]);

        setText("");
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                {messages.map((m, i) => (
                    <div key={i} className={m.sender}>
                        {m.text}
                    </div>
                ))}
            </div>

            <div className="chat-input">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Ask something..."
                />
                <button onClick={send}>Send</button>
            </div>
        </div>
    );
}

export default ChatBox;