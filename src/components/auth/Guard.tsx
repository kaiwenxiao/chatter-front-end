import { useGetMe } from "../../hook/useGetMe.ts";
import excludedRoutes from "../../constants/excluded-routes.ts";
import { useEffect } from "react";
import { authenticatedVar } from "./authenticated.ts";
import { snackVar } from "../../constants/snack.ts";
import { UNKNOWN_ERROR_SNACK_MESSAGE } from "../../constants/errors.ts";
import { usePath } from "../../hook/usePath.ts";

interface GuardProps {
  children: JSX.Element;
}

export const Guard = ({ children }: GuardProps) => {
  const { data: user, error } = useGetMe();
  const { path } = usePath();

  useEffect(() => {
    if (user) authenticatedVar(true);
  }, [user]);

  useEffect(() => {
    if (error?.networkError) snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
  }, [error]);

  return <>{excludedRoutes.includes(path) ? children : user && children}</>;
};
