import React from 'react'

function ChatBoxHeader({ groupName="" ,showSettings ,icon }) {
    return (
        <div className="flex justify-between items-center bg-gray-800 p-4">
          <div className="text-white text-lg">{groupName}</div>
          <div className="ml-2">
            <button className="text-white" onClick={()=> showSettings(pre => !pre)}>
            <i className={icon}></i>
            </button>
          </div>
        </div>
      );
}

export default ChatBoxHeader
