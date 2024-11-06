import { Button, Stack, TextField } from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";
import { useGetMe } from "../../hook/useGetMe.ts";
import { useNavigate } from "react-router-dom";

interface AuthProps {
  submitLabel: string;
  onSubmit: (credentials: { email: string; password: string }) => Promise<void>;
  children: React.ReactNode;
  error?: string;
}

const Auth = ({
  submitLabel,
  onSubmit,
  children,
  error,
}: PropsWithChildren<AuthProps>) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // after login we call `await client.refetchQueries({ include: "active" });`,
  // `useGetMe` in Auth component run before login component will be outdated
  // so it's necessarily to call `useGetMe` again when you need to do something with this query
  const { data } = useGetMe();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: 360,
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        value={email}
        error={!!error}
        helperText={error}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        error={!!error}
        helperText={error}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button variant="contained" onClick={() => onSubmit({ email, password })}>
        {submitLabel}
      </Button>
      {children}
    </Stack>
  );
};

export default Auth;
