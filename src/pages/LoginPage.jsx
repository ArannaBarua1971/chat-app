import React, { useEffect, useState } from "react";
import { Button, Input } from "../Components";
import { useNavigate } from "react-router-dom";
import authservice from "../appwrite/auth";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // if user was already loged in
  useEffect(()=>{
    var data =JSON.parse(localStorage.getItem("userInfo"))

    if(data){
      navigate("/create_group")
    }

  },[])



  // for handle Login
  const handleLogin = async () => {
    if (userEmail != "" && password != "") {

      let res = await authservice
        .login({ email: userEmail, password: password })
        .then((res) => {

          // if get response
          if(res){
            setError("");
          }
        })
        .catch((error) => {
          setError("Invalid userEmail or password.");
        });


    } else {
      // if email and password not enternd
      setError("Enter userEmail or password.");
    }
    console.log(error);
    if (!error) navigate("/create_group");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login to Chat</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div>
          <div className="mb-4">
            <Input
              type="Email"
              id="Email"
              label="Email"
              classForLabel="block text-gray-700 text-sm font-bold mb-2"
              classForInput="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your Email"
              value={userEmail}
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
          <Button
            onClick={handleLogin}
            className="w-[100%] p-3 bg-[var(--text-color1)] text-white hover:text-black"
          >
            Log in
          </Button>
          <Button
            onClick={() => navigate("/registration")}
            className="w-[100%] p-3 text-black"
          >
            Registration
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
