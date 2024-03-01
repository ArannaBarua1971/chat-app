import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authservice from "../appwrite/auth";

function LoginProtected(props) {
  let { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    try {

      // get current athorize user data
      let res = authservice
        .getCurrentUser()
        .then((res) => {
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ name: res.name, email: res.email, id: res.$id })
          );
        })
        .catch((error) => {
          navigate("/");
        });
    } catch {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
}

export default LoginProtected;
