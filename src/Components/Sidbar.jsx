import React, { useEffect, useState } from "react";
import { Button } from "./../Components";
import UserInfo from "../pages/sidbar pages/UserInfo";
import Chats from "../pages/sidbar pages/Chats";
import Groups from "../pages/sidbar pages/Groups";
import CreateGroup from "../pages/sidbar pages/CreateGroup";
import Notification from "../pages/sidbar pages/Notification";
import { useNavigate } from "react-router-dom";
function Sidbar() {
  const [showPage, setShoWPage] = useState(<CreateGroup />);
  const [acitve, setActive] = useState(0);
  const [notificationCount, setnotificationCount] = useState(10);
  const navigate=useNavigate()
  useEffect(()=>{
    navigate("/create_group")
  },[])

  let navs = [
    {
      id: 0,
      icon: "fa-solid fa-plus",
      page: <CreateGroup />,
      path:"/create_group"
    },
    {
      id: 1,
      icon: "fa-solid fa-user",
      page: <UserInfo />,
      path:"/user_info"
    },
    {
      id: 2,
      icon: "fa-solid fa-comments",
      page: <Chats />,
    },
    {
      id: 3,
      icon: "fa-solid fa-user-group",
      page: <Groups />,
      path:"/groups"
    },
    {
      id: 4,
      icon: "fa-solid fa-bell",
      page: <Notification />,
      path:"/notifications"
    },
  ];
  return (
    <>
      {/* navbar icon section */}
      <div id="navbarIconsSection" className=" w-[18%] h-screen flex flex-col">
        {navs.map((nav, index) => (
          <div key={index} className="mx-auto">
            {nav.id == 4 ? (
              <div className="relative">
                {notificationCount > 0 && (
                  <div className="absolute top-[10px] right-[10px] bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                    {notificationCount}
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
            <Button
              
              iconName={nav.icon}
              clasNameforIcon="text-black"
              clasName={`${nav.id == acitve ? "active" : ""} my-3 w-[60px] h-[60px]`}
              onClick={() => {
                setShoWPage(nav.page);
                setActive(nav.id);
                navigate(nav.path)
              }}
            />
          </div>
        ))}
      </div>
      {/* sidbar pages */}
      <div id="sidbar_pages" className="w-[82%]">
        {showPage}
      </div>
    </>
  );
}

export default Sidbar;
