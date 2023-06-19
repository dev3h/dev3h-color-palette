import store from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, withTheme } from "styled-components";

import path from "./utils/path";
import { Home } from "./views/publicViews";
import { UserLogin } from "./views/publicViews/auth";
import PublicLayout from "./layouts/publicLayouts";
import GlobalStyle from "./assets/css/global-css/GlobalStyles";
import theme from "./configs/ThemeConfig";

function App() {
  const router = createBrowserRouter([
    {
      path: path.PUBLIC,
      element: <PublicLayout />,
      children: [
        {
          path: path.HOME,
          element: <Home />,
        },
        {
          path: path.LOGIN,
          element: <UserLogin />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
