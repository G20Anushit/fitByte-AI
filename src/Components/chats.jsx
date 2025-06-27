import React, { use, useState } from "react";
import { RiRobot2Fill } from "react-icons/ri";
import { IoIosChatboxes } from "react-icons/io";
import { BiSolidSend } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useProfile } from "../context/userContext";
import { getBulletPointAnswer } from "../../gemini";

const Chats = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { sethistory } = useProfile();

  const handleOnclick = async () => {
    if (input.trim() === "") {
      alert("Please enter a message before sending.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const answer = await getBulletPointAnswer(input);
      const parsed = JSON.parse(answer);
      setData(parsed);

      const newChat = {
        question: parsed.question,
        category: parsed.category,
        answer: parsed.answer,
        motivation: parsed.motivation,
        timestamp: new Date().toISOString() 
      };
      sethistory((prev) => {
        const updated = [...prev, newChat];
        localStorage.setItem("chatHistory", JSON.stringify(updated));
        return updated;
      });
    } catch (err) {
      console.error("Error fetching answer:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white px-8 py-5 border-gray-400 border-2 rounded-lg shadow-xl/30 w-full sm:max-w-md sm:min-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl min-h-[80vh] overflow-auto relative">
        <div className="flex items-center justify-between mb-6 border-2 border-gray-300 p-3 rounded-lg shadow-lg bg-[#0A3B3B] text-white">
          <div className="flex items-center gap-3">
            <IoIosChatboxes className="text-[1.5rem]" />
            <h3>ChatBOT</h3>
          </div>
          <button className="p-2 rounded-lg" onClick={() => setData(null)}>
            Clear Chat
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {!data && !loading && !error && (
            <div className="flex items-start gap-3">
              <RiRobot2Fill className="text-[1.5rem]" />
              <div className="bg-gray-100 text-black p-4 rounded-lg shadow-md max-w-[75%]">
                <p>Hello! How can I assist you today?</p>
              </div>
            </div>
          )}

          {input && (
            <div className="flex items-start gap-3 flex-row-reverse">
              <CgProfile className="text-[1.5rem]" />
              <div className="bg-[#0A3B3B] p-4 rounded-lg shadow-md max-w-[75%]">
                <p className="text-white">{input}</p>
              </div>
              <RiDeleteBin5Fill className="text-[1.2rem] hidden" />
            </div>
          )}

          {loading && (
            <div className="bg-gray-100 p-4 rounded-lg shadow-md text-gray-500 text-center">
              Thinking...
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg shadow-md">
              {error}
            </div>
          )}

          {data && (
            <div className="bg-gray-100 p-4 rounded-lg shadow-md text-black space-y-2 overflow-auto max-h-[50vh]">
              <h4 className="font-semibold">Question: {data.question}</h4>
              <p className="text-gray-600 italic">Category: {data.category}</p>
              <ul className="list-disc list-inside text-black ml-4">
                {data.answer.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <blockquote className="text-[#0A3B3B] font-medium italic border-l-4 pl-2 border-[#0A3B3B]">
                {data.motivation}
              </blockquote>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mb-2 absolute bottom-2 left-8 right-8">
          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setData(null);
            }}
            className="w-[80%] p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3B3B] resize-none mt-2"
            rows="1"
            placeholder="@ Type your message here..."
          ></textarea>
          <button
            className="mt-3 bg-[#0A3B3B] text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-600 transition duration-200"
            onClick={handleOnclick}
          >
            <BiSolidSend className="text-[1.5rem]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chats;
