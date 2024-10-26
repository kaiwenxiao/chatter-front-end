import { useGetMe } from "../../hook/useGetMe.ts";
import excludedRoutes from "../../constants/excluded-routes.ts";
import { useEffect } from "react";
import { authenticatedVar } from "./authenticated.ts";

interface GuardProps {
  children: JSX.Element;
}

export const Guard = ({ children }: GuardProps) => {
  const { data: user } = useGetMe();

  useEffect(() => {
    if (user) authenticatedVar(true);
  }, [user]);

  return (
    <>
      {excludedRoutes.includes(window.location.pathname)
        ? children
        : user && children}
    </>
  );
};
