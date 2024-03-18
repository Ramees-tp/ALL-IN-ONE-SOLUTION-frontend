import { useEffect, useState } from "react";
import io from "socket.io-client"
const socket = io.connect('http://localhost:918')

function SocketChatWorker({workerId, userId}) {
    const [messages, setMessages] = useState([]);
    console.log(messages);
    const [inputMessage, setInputMessage] = useState('');

 const sendMessage = () => {        
   if (inputMessage.trim() !== '') {
          socket.emit('sendMessage', { 
            message: inputMessage, 
            sender: workerId, 
            receiver: userId
          });
          setMessages(prevMessages => [...prevMessages, { message: inputMessage, sender: workerId, type: "sent" }]);
          setInputMessage('');
        }
 };
 useEffect(()=>{
    socket.emit('workerConnection', {sender: workerId})
 },[])
 
 useEffect(()=>{
    socket.on('sendMessage',({ message, sender })=>{
        console.log(message, sender);
        
            setMessages((prevMessages) => [
              ...prevMessages, 
              { message, sender,  type: "received"}]);

        return () => {
            // Clean up the event listener when unmounting the component
            socket.off("sendMessage");
          };
    })
 },[userId])
  return (
    <div className='h-full bg-slate-200'>
     <div className="flex flex-col h-full">
      <div className="flex-grow p-4 border-b-2 border-gray-300">
        <div className="overflow-y-auto h-full">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <span className="font-bold">{message.sender === workerId ? "You" : "Other"}:{" "}</span>
              <span>{message.message}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center p-4 border-t-2 border-gray-300">
        <input
          type="text"
          className="flex-grow mr-2 p-2 border border-gray-300 rounded"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
    </div>
  )
}

export default SocketChatWorker
