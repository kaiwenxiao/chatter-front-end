import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { API_URL } from "./url.ts";
import { onError } from "@apollo/client/link/error";
import excludedRoutes from "./excluded-routes.ts";
import router from "../components/Routes.tsx";

const logoutLink = onError((error) => {
  if (
    error.graphQLErrors?.length &&
    (error.graphQLErrors[0].extensions?.originalError as any).statusCode === 401
  ) {
    if (!excludedRoutes.includes(window.location.pathname)) {
      router.navigate("/login");
      client.resetStore();
    }
  }
});

const httpLink = new HttpLink({ uri: `${API_URL}/graphql` });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: `${API_URL}/graphql`,
  // TODO
  link: logoutLink.concat(httpLink),
});

export default client;
