import store from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import path from "./utils/path";
import ErrorPage from "./views/publicViews/error-page";
import { Home, PaletteDetail } from "./views/publicViews";
import { UserLogin } from "./views/publicViews/auth";
import PublicLayout from "./layouts/publicLayouts";
import GlobalStyle from "./assets/css/global-css/GlobalStyles";
import theme from "./configs/ThemeConfig";

function App() {
  const router = createBrowserRouter([
    // route user
    {
      path: path.PUBLIC,
      element: <PublicLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: path.HOME,
          element: <Home />,
        },
        {
          path: path.POPULAR,
          element: <Home />,
        },
        {
          path: path.RANDOM,
          element: <Home />,
        },
        {
          path: path.COLLECTION,
          element: <Home />,
        },
        {
          path: path.PALETTE_DETAIL_ID,
          element: <PaletteDetail />,
        },
      ],
    },
    {
      path: path.LOGIN,
      element: <UserLogin />,
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
