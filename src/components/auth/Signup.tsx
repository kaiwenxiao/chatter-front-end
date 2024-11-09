import { Link } from "react-router-dom";
import Auth from "./Auth.tsx";
import { Link as MUILink, TextField } from "@mui/material";
import { useCreateUser } from "../../hook/useCreateUser.ts";
import { useState } from "react";
import { extractErrorMessage } from "../../utils/errors.ts";
import { useLogin } from "../../hook/useLogin.ts";
import { UNKNOWN_ERROR_MESSAGE } from "../../constants/errors.ts";

const Signup = () => {
  const [createUser] = useCreateUser();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { login } = useLogin();

  return (
    <Auth
      submitLabel="Sign Up"
      error={error}
      extraFields={[
        <TextField
          type="text"
          label="Username"
          variant="outlined"
          value={username}
          error={!!error}
          helperText={error}
          onChange={(event) => setUsername(event.target.value)}
        />,
      ]}
      onSubmit={async ({ email, password }) => {
        try {
          await createUser({
            variables: {
              createUserInput: {
                email,
                username,
                password,
              },
            },
          });
          await login({ email, password });
          setError("");
        } catch (err) {
          const errorMessage = extractErrorMessage(err);
          if (errorMessage) return setError(errorMessage);
          setError(UNKNOWN_ERROR_MESSAGE);
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
