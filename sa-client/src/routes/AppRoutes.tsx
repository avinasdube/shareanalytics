// now you can remove this file and folder
// not used any where anymore
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing components

import Signup from "../components/pages/Signup/Signup";
import Login from "../components/pages/Login/Login";
import Home from "../components/pages/Home/Home";

// setting up router

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
