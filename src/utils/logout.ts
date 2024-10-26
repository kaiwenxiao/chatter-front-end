import router from "../components/Routes.tsx";
import client from "../constants/apollo-client.ts";
import { authenticatedVar } from "../components/auth/authenticated.ts";

export const onLogout = () => {
  authenticatedVar(false);
  router.navigate("login");
  client.resetStore();
};
