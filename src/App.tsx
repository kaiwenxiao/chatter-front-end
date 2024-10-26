import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes.tsx";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client.ts";
import { Guard } from "./components/auth/Guard.tsx";
import Header from "./components/header/Header.tsx";
import Snackbar from "./components/snackbar/Snackbar.tsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Container>
          <Guard>
            <RouterProvider router={router}></RouterProvider>
          </Guard>
        </Container>
        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
