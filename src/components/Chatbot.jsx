import { useState } from "react";
import { callChatbotWithQuestion } from "../utils/callChatbotWithQuestion";
import { IoMdChatboxes } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import LoadingDots from "./LoadingDots";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { type: "bot", content: "How can I help you?" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory((prev) => [...prev, { type: "user", content: message }]);
    const userQuestion = message;
    setMessage("");
    setIsLoading(true);

    try {
      const response = await callChatbotWithQuestion(userQuestion);
      setChatHistory((prev) => [...prev, { type: "bot", content: response }]);
    } catch (e) {
      setChatHistory((prev) => [
        ...prev,
        { type: "bot", content: "Sorry, I couldn't process your request.",e },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-200"
      >
        {isOpen ? <IoClose size={24} /> : <IoMdChatboxes size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-[500px] bg-white rounded-lg shadow-xl flex flex-col border">
          {/* Chat Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">GreenTex Assistant</h3>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`flex ${
                  chat.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    chat.type === "user"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {chat.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <LoadingDots />
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-green-600"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
