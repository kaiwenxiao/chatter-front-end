import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL } from "./url.ts";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${API_URL}/graphql`,
});

export default client;
