
import { useState } from "react";
import axios from "axios";

function AIChatBot() {

  const [message, setMessage] = useState("");

  const [reply, setReply] = useState("");

  const sendMessage = async () => {

    const res = await axios.post(

      "http://localhost:5000/api/ai/chat",

      { message }

    );

    setReply(res.data.answer);

  };

  return (

    <div className="chatbot">

      <h2>🤖 Smart Shopping Assistant</h2>

      <textarea

        placeholder="Ask anything..."

        onChange={(e) => setMessage(e.target.value)}

      />

      <button onClick={sendMessage}>

        Ask AI

      </button>

      <div className="reply">

        {reply}

      </div>

    </div>

  );

}

export default AIChatBot;
