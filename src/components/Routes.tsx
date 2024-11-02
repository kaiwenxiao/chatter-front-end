import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/Login.tsx";
import Signup from "./auth/Signup.tsx";
import { Home } from "@mui/icons-material";
import Chat from "./chat/Chat.tsx";

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
  {
    path: "/chats/:_id",
    element: <Chat />,
  },
]);

export default router;
