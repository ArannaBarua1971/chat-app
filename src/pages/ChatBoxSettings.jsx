import React, { useEffect, useState } from "react";
import { Button, ChatBoxHeader } from "../Components";
import authservice from "../appwrite/auth";
import groupService from "../appwrite/groups";

const ChatBoxSettings = ({
  groupName,
  groupStatus,
  className,
  showSettings,
}) => {
  const [section, setSection] = useState("Group Members");
  const [allUsers, setAllUsers] = useState([]);
  const [groupMembers, setGroupMembers] = useState([]);
  const [owner, setOwner] = useState(false);

  // useEffect(()=>{
  //   authservice.allUser()
  //   .then(res=>{
  //     console.log(res)
  //   })
  // },[])

  useEffect(() => {
    if (groupName) {
      let { id } = JSON.parse(localStorage.getItem("userInfo"));
      groupService
        .verifyOwner({ group_name: groupName, user_id: id })
        .then((res) => {
          if (res.documents.length) setOwner(true);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div className={`${className} :w-screen  mx-auto h-[100vh]`}>
      {/* chat box header */}
      <ChatBoxHeader
        groupName={groupName ? groupName : "none"}
        showSettings={showSettings}
        icon={"fa-solid fa-chevron-left"}
      />
      <div className="bg-white shadow-md h-[100vh] overflow-y-auto  px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2">{groupName}</h1>
          <p className="text-sm text-gray-600">
            {groupStatus === "public" ? "Public Group" : "Private Group"}
          </p>
        </div>

        {/* all group member and user */}
        <div className="div">
          {/*  Navbar for group member and user*/}
          <nav>
            <div className="flex items-center justify-between h-16">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className={`text-gray-700 ${
                      section == "Group Members" ? "bg-gray-700 text-white" : ""
                    } px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    Group Members
                  </a>

                  {owner ? (
                    <a
                      href="#"
                      className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Users
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
        {section == "Group Members" ? (
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">All Users</h2>
            <ul>
              {allUsers.map((user, index) => (
                <li key={index} className="text-gray-700">
                  {user}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-bold mb-2">Group Members</h2>
            <ul>
              {groupMembers.map((member, index) => (
                <li key={index} className="text-gray-700">
                  {member}
                </li>
              ))}
            </ul>
          </div>
        )}

        {owner ? (
          <Button clasName="w-[20%]  p-3 bg-[var(--text-color1)] text-white hover:text-black">
            Update Group Settings
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ChatBoxSettings;
