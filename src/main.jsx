import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import LoginProtected from "./Components/LoginProtected.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/create_group",
        element: <LoginProtected Component={Layout} />,
      },
      {
        path: "/user_info",
        element: <LoginProtected Component={Layout} />,
      },
      {
        path: "/chats",
        element: <LoginProtected Component={Layout} />,
      },
      {
        path: "/groups/:name?/:id?",
        element: <LoginProtected Component={Layout} />,
      },
      {
        path: "/notifications",
        element: <LoginProtected Component={Layout} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
