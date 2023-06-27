import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
import path from "./utils/path";
import ErrorPage from "./views/publicViews/error-page";
import { Home, PaletteDetail } from "./views/publicViews";
import UserAuthView from "./views/publicViews/auth";
import { UserAuthLayout, UserAppLayout } from "./layouts/publicLayouts";
import GlobalStyle from "./assets/css/global-css/GlobalStyles";
import theme from "./configs/ThemeConfig";

function App() {
  const router = createBrowserRouter([
    // route user
    {
      path: path.PUBLIC,
      element: <UserAppLayout />,
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
      path: path.PUBLIC,
      element: <UserAuthLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: path.USERAUTH,
          element: <UserAuthView />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
