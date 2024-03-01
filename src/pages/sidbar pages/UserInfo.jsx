import React, { useEffect, useState } from "react";
import { Button } from "./../../Components";
import { Navigate, useNavigate } from "react-router-dom";
import authservice from "../../appwrite/auth";

function UserInfo() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      let data = JSON.parse(localStorage.getItem("userInfo"));

      setName(data.name);
      setEmail(data.email);
    } catch (error) {}
  }, []);

  // logout handler function
  const logoutHandler =  () => {
    localStorage.setItem("userInfo", "");
    localStorage.setItem("cookieFallback", "");
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex  items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="flex items-center justify-center">
              <img
                className="h-24 w-24 rounded-full"
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
                alt={name}
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
              {/* <p className="text-sm text-gray-600">Web Developer</p> */}
            </div>
          </div>
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Email</span>
              <span className="text-sm text-gray-800">{email}</span>
            </div>
            {/* <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-gray-600">Phone</span>
              <span className="text-sm text-gray-800">+1234567890</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-gray-600">Location</span>
              <span className="text-sm text-gray-800">New York, USA</span>
            </div> */}
          </div>
          {/* <div className="border-t border-gray-200 px-6 py-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Bio</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero eu tortor convallis, ac bibendum urna efficitur.
            </p>
          </div> */}
          <div className="border-t  border-gray-200 px-6 py-4">
            <Button
              onClick={logoutHandler}
              clasName="w-[100%] p-3 bg-[var(--text-color2)] "
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
