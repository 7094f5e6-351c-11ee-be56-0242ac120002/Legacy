import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/login/Login.tsx";
import Register from "./pages/register/Register.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import { MantineProvider } from "@mantine/core";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider
    theme={{
      fontFamily: "Montserrat",
      colors: {
        background: ["#141126"],
      },
    }}
  >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </MantineProvider>
);
