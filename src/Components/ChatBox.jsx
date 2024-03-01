import React, { useEffect, useState } from "react";
import { BubbleMessage, Button, ChatBoxHeader, Input } from "./../Components";
import ChatBoxSettings from "../pages/ChatBoxSettings";
import { useParams } from "react-router-dom";
import groupService from "../appwrite/groups";
import client from "../appwrite/realTime";
import databases from "../appwrite/realTime";

function ChatBox() {
  const { name, id } = useParams();
  // settings status
  const [showSettings, setShowSettings] = useState(false);

  // ChatBoxData var
  const [groupName, setGroupName] = useState();
  const [groupId, setGroupId] = useState();
  const [sendMessage, setSendMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState();

  const getMessage = () => {
    let message = groupService
      .getGroupMessage({ group_id: id })
      .then((response) => {
        setMessages(response.documents);
      });
    setSendMessage("");
  };
  // chatBoxData Getter
  useEffect(() => {
    setShowSettings(false);
    setGroupName(name);
    setGroupId(id);

    try {
      let data = JSON.parse(localStorage.getItem("userInfo"));
      setUserId(data.id);
    } catch (error) {
      console.log(error);
    }
    try {
      let data = JSON.parse(localStorage.getItem("newMessage"));
      setUserId(data.id);
    } catch {}
    getMessage();
  }, [name, id]);
  useEffect(() => {
    getMessage();
    const unsubscribe = client.subscribe(
      [
        "databases.65c9a1254dd59a7cc3c1.collections.65cc21b3ccf4bf9587a2.documents",
      ],
      (response) => {
        if (
          response.events.includes(
            "databases.*.collections.*.documents.*.create"
          )
        ) {
          // Callback will be executed on changes for documents A and all files.
          setMessages((preMes) => [...preMes, response.payload]);
          // setMessages((premessage)=>[...premessage, response.payload]);
          console.log(response)
        }
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const handleMessageSubmit = async () => {
    let res = await groupService.createMessage({
      body: sendMessage,
      group_id: id,
      user_id: userId,
    });

    if (res) {
      setSendMessage("");
    }
  };



  return (
    <>
      {!showSettings ? (
        // chat box
        <div className="flex flex-col h-screen">
          {/* chat box header */}
          <ChatBoxHeader
            groupName={groupName ? groupName : "none"}
            showSettings={setShowSettings}
            icon={"fa-solid fa-gear"}
          />
          {/* chat box content */}

          <div className="flex-1 overflow-y-auto bg-white  p-4">
            {messages && groupName ? (
              <>
                {messages.map((message, index) => (
                  <BubbleMessage
                    key={index}
                    currentTime={message.$createdAt}
                    message={message.body}
                    sender={`${message.user_id == userId ? "self" : ""}`}
                  />
                ))}
              </>
            ) : (
              <div>hi</div>
            )}
          </div>
          <div className="p-4 flex border  bg-white items-center">
            <Input
              type="text"
              name="message"
              placeholder="Type your message..."
              classForInput="bg-[#E6EBF5] w-[80%] border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              onChange={(e) => setSendMessage(e.target.value)}
              value={sendMessage}
            />
            <Button
              iconName="fa-solid fa-paper-plane"
              className="2xl:w-[5%] me-3 w-[15%] bg-blue-400 text-white hover:text-black  border-2 border-blue-400"
              onClick={handleMessageSubmit}
            />
          </div>
        </div>
        
      ) : (
        <>
          {/* chatBoxsettings */}
          <ChatBoxSettings
            groupName={groupName}
            groupStatus={1}
            showSettings={setShowSettings}
          />
        </>
      )}
    </>
  );
}

export default ChatBox;
