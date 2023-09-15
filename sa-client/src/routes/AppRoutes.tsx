// importing dependencies

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";

// importing components

import Signup from "../components/pages/Signup/Signup";
import Login from "../components/pages/Login/Login";
import Home from "../components/pages/Home/Home";
import Navbar from "../components/organisms/Navbar/Navbar";
import Footer from "../components/organisms/Footer/Footer";

// defining layout

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// setting up router

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function AppRoutes() {
  return (
    <div className="AppRoutes">
      <RouterProvider router={router} />
    </div>
  );
}

export default AppRoutes;
