import { Link } from "react-router-dom";
import Auth from "./Auth.tsx";
import { Link as MUILink } from "@mui/material";
import { useCreateUser } from "../../hook/useCreateUser.ts";
import { useState } from "react";
import { extractErrorMessage } from "../../utils/errors.ts";

const Signup = () => {
  const [createUser] = useCreateUser();
  const [error, setError] = useState("");

  return (
    <Auth
      submitLabel="Sign Up"
      error={error}
      onSubmit={async ({ email, password }) => {
        try {
          await createUser({
            variables: {
              createUserInput: {
                email,
                password,
              },
            },
          });
          setError("");
        } catch (err) {
          const errorMessage = extractErrorMessage(err);
          if (errorMessage) return setError(errorMessage);
          setError("Unknown error occurred");
        }
      }}
    >
      <Link to="/login" style={{ alignSelf: "center" }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
