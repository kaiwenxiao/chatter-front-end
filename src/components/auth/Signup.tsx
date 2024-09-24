import { Link } from "react-router-dom";
import Auth from "./Auth.tsx";
import { Link as MUILink } from "@mui/material";

const Signup = () => {
  return (
    <Auth submitLabel="Sign Up" onSubmit={async () => {}}>
      <Link to="/signup" style={{ alignSelf: "center" }}>
        <MUILink>Sign Up</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
