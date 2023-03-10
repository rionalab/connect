import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "pages/Homepage";
import Login from "pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
