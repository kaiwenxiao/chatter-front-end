import { Link } from "react-router-dom";
import Auth from "./Auth.tsx";
import { Link as MUILink } from "@mui/material";
import { useCreateUser } from "../../hook/useCreateUser.ts";

const Signup = () => {
  const [createUser] = useCreateUser();

  return (
    <Auth
      submitLabel="Sign Up"
      onSubmit={async ({ email, password }) => {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password,
            },
          },
        });
      }}
    >
      <Link to="/signup" style={{ alignSelf: "center" }}>
        <MUILink>Sign Up</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
