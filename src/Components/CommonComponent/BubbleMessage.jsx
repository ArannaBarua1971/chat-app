import React from "react";

const BubbleMessage = ({ message, sender, currentTime }) => {
  const isSelf = sender === "self";

  return (
    <div className={`flex ${isSelf ? "justify-end" : "justify-start"} mb-4 `}>
      <div className="div">
          <div className="text-xs text-black">{currentTime}</div>
          <div
            className={`max-w-xs rounded-lg px-4 py-2 ${
              isSelf ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            <div>{message}</div>
          </div>
      </div>
    </div>
  );
};

export default BubbleMessage;
