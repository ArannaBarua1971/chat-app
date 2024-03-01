import React, { useState, useEffect } from "react";
import { Button, Input } from "../Components";
import { useNavigate } from "react-router-dom";
import authservice from "../appwrite/auth";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

 // if user was already loged in
 useEffect(()=>{
  var data =JSON.parse(localStorage.getItem("userInfo"))
  if(data){
    navigate("/create_group")
  }

},[])

  const handleRegistration = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      let response = await authservice.registration({
        email: useremail,
        name: username,
        password: password,
      });

      navigate("/create_group");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Register for Chat</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div>
          <div className="mb-4">
            <Input
              type="text"
              id="username"
              label="Username"
              classForLabel="block text-gray-700 text-sm font-bold mb-2"
              classForInput="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="Email"
              id="email"
              label="Email"
              classForLabel="block text-gray-700 text-sm font-bold mb-2"
              classForInput="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your Email"
              value={useremail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              id="password"
              label="Password"
              classForLabel="block text-gray-700 text-sm font-bold mb-2"
              classForInput="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              id="confirmPassword"
              label="Confirm Password"
              classForLabel="block text-gray-700 text-sm font-bold mb-2"
              classForInput="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <Button
            onClick={handleRegistration}
            clasName="w-[100%] p-3 bg-[var(--text-color1)] text-white hover:text-black"
          >
            Register
          </Button>
          <Button
            onClick={() => navigate("/")}
            clasName="w-[100%] p-3 text-black"
          >
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
