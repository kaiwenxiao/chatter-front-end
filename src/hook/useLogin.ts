import { useState } from "react";
import { API_URL } from "../constants/url.ts";
import client from "../constants/apollo-client.ts";
import { UNKNOWN_ERROR_MESSAGE } from "../constants/errors.ts";

interface LoginRequest {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [error, setError] = useState("");

  const login = async (request: LoginRequest) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!res.ok) {
      if (res.status === 401) setError("Credentials are not valid");
      else setError(UNKNOWN_ERROR_MESSAGE);
      return;
    }

    setError("");
    // throw all the cached query cached by apollo, and refetch
    await client.refetchQueries({ include: "active" });
  };
  return { login, error };
};
