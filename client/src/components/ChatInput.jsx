
function ChatInput({value,setValue,send}){

return(

<div className="chat-input">

<input

value={value}

onChange={(e)=>setValue(e.target.value)}

placeholder="Type message..."

/>

<button onClick={send}>

Send

</button>

</div>

)

}

export default ChatInput;
