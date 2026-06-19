
import { useContext,useEffect,useState } from "react";

import { SocketContext } from "../context/SocketContext";

import ChatMessage from "./ChatMessage";

import ChatInput from "./ChatInput";

function ChatBox(){

const socket=useContext(SocketContext);

const[messages,setMessages]=useState([]);

const[text,setText]=useState("");

useEffect(()=>{

socket.on("receive_message",(data)=>{

setMessages(prev=>[...prev,data]);

});

},[]);

const send=()=>{

socket.emit("send_message",text);

setText("");

};

return(

<div className="chat-box">

<div className="chat-body">

{messages.map((m,i)=>

<ChatMessage key={i} message={m}/>

)}

</div>

<ChatInput

value={text}

setValue={setText}

send={send}

/>

</div>

)

}

export default ChatBox;
