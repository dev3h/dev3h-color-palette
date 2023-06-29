import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
import GlobalStyle from "./assets/css/global-css/GlobalStyles";
import { theme, router } from "./configs";

function App() {
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
