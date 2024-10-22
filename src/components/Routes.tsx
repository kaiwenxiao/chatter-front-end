import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login.tsx";
import Signup from "./auth/Signup.tsx";
import { Home } from "@mui/icons-material";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
