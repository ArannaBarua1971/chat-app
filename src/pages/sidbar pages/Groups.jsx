import React, { useEffect, useState } from "react";
import { ChatBox, ContentHeader } from "../../Components";
import { useNavigate } from "react-router-dom";
import groupService from "../../appwrite/groups";

function Groups() {
  const navigate = useNavigate();
  // get own group
  const [groups, setGroups] = useState([]);
  // get another group you are not joind
  const [anotherGroups, setAnotherGroups] = useState([]);

  // api caller function for own group and another group
  useEffect(() => {
    console.log("Hi")
    let { id } = JSON.parse(localStorage.getItem("userInfo"));
    groupService.getOwnGroup({ user_id: id }).then((res) => {
      setGroups(res.documents);
    });
  }, []);


  // set data for chat box component after clicking the group name
  const ChatBoxDataChanger = (groupName, groupId) => {
    navigate(`/groups/${groupName}/${groupId}`);
  };
  return (
    <aside className="flex h-screen w-100 flex-col overflow-y-auto border-r px-5 py-8">
      {/* content header */}
      <ContentHeader title="Groups Chat" />
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              Own Groups
            </label>
            {groups.map((group,index) => (
              <a key={index}
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                onClick={() => ChatBoxDataChanger(group.group_name, group.$id)}
              >
                <i className="fa-solid fa-people-group"></i>
                <span className="mx-2 text-sm font-medium">{group.group_name}</span>
              </a>
            ))}
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              Your Groups
            </label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <i className="fa-solid fa-people-group"></i>
              <span className="mx-2 text-sm font-medium">group 1</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <i className="fa-solid fa-people-group"></i>
              <span className="mx-2 text-sm font-medium">group 2</span>
            </a>
          </div>
        </nav>
      </div>
      
    </aside>
  );
}

export default Groups;
