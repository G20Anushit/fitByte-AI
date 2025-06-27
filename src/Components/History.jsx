import React from "react";
import { useProfile } from "../context/userContext";
import { RiDeleteBin5Fill } from "react-icons/ri";

const History = () => {
  const { history = [] ,sethistory} = useProfile(); 

  const formatDate = (iso) => {
   if (!iso) return "Unknown time";
    const date = new Date(iso);
    return isNaN(date.getTime())
      ? "Invalid date"
      : `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} @ ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
  const handledel=()=>{
      localStorage.removeItem("chatHistory");  
      sethistory([]);
  }

  const handledblclick=()=>{
    const del=document.querySelector(".del");
    del.classList.toggle("hidden");
  }

  const handleonedelete = (indexToDelete) => {
  const newChat = history.filter((_, index) => index !== indexToDelete);
  sethistory(newChat);
  localStorage.setItem("chatHistory", JSON.stringify(newChat)); 
};
  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-gray-100 px-8 py-5 border-gray-400 border-2 rounded-lg shadow-xl w-full sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl min-h-[80vh] overflow-auto relative">
        <div className="mb-6 border-2 border-gray-300 p-3 rounded-lg shadow-lg bg-[#0A3B3B] text-white ">
          <div className="flex justify-between p-2">
              <h2 className="text-2xl font-bold mb-2">Chat History</h2>
              {history.length>0 && <button onClick={handledel}>Clear Chat</button>}
          </div>
          
          <p>Your saved AI fitness chats will appear here </p>
        </div>

        {history.length === 0 ? (
          <div className="text-center text-gray-500">No chat history available start chating with AI ! </div>
        ) : (
          <div className="flex flex-col gap-6" onDoubleClick={handledblclick}>
            {history.map((chat, index) => (
              <div key={index} className="bg-white border border-gray-300 p-4 rounded-lg shadow-sm relative">
                <div className="flex justify-between">
                <p className="text-sm text-gray-500 mb-2">{formatDate(chat.timestamp)}</p>
                < RiDeleteBin5Fill className="del text-[1.5rem] hidden" onClick={()=>handleonedelete(index)}/>
                </div>
                <p className="font-semibold text-black">
                  <span className="text-[#0A3B3B]">Q:</span> {chat.question}
                </p>

                <p className="text-sm text-gray-700 italic mb-1">
                  Category: {chat.category}
                </p>

                <ul className="list-disc list-inside text-sm ml-4 text-gray-800">
                  {chat.answer && chat.answer.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <p className="text-sm text-teal-700 mt-2 italic">“{chat.motivation}”</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
