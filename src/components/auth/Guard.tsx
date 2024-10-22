import { useGetMe } from "../../hook/useGetMe.ts";
import excludedRoutes from "../../constants/excluded-routes.ts";

interface GuardProps {
  children: JSX.Element;
}

export const Guard = ({ children }: GuardProps) => {
  const { data: user } = useGetMe();

  return (
    <>
      {excludedRoutes.includes(window.location.pathname)
        ? children
        : user && children}
    </>
  );
};
