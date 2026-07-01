
import { useState } from "react";



function AIChatWidget() {

    const [messages, setMessages] = useState([]);

    const [text, setText] = useState("");

    const send = async () => {

        if (!text) return;

        const userMessage = {

            role: "user",

            text,

        };

        setMessages((prev) => [...prev, userMessage]);

        const res = await askAI(text);

        setMessages((prev) => [

            ...prev,

            userMessage,

            {

                role: "ai",

                text: res.data.reply,

            },

        ]);

        setText("");

    };

    return (

        <div className="ai-widget">

            <div className="chat-window">

                {messages.map((msg, index) => (

                    <div

                        key={index}

                        className={msg.role}

                    >

                        {msg.text}

                    </div>

                ))}

            </div>

            <div className="input-area">

                <input

                    value={text}

                    onChange={(e) =>
                        setText(e.target.value)
                    }

                    placeholder="Ask AI..."

                />

                <button onClick={send}>

                    Send

                </button>

            </div>

        </div>

    );

}

export default AIChatWidget;
