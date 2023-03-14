import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "pages/Homepage";
import Referral from "pages/Referral";
import Login from "pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
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
  {
    path: "/referralform",
    element: <Referral />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
