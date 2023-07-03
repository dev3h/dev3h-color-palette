import { createBrowserRouter } from "react-router-dom";

import path from "../utils/path";
import ErrorPage from "../views/publicViews/error-page";
import { Home, Palette, PaletteDetail } from "../views/publicViews";
import FinalRegister from "../views/publicViews/auth/register-form/FinalRegister";
import UserAuthView from "../views/publicViews/auth";
import { UserAuthLayout, UserAppLayout } from "../layouts/publicLayouts";
import ForgotPassword from "../views/publicViews/auth/forgot-password/forgot-password-form";
import NewPassWord from "../views/publicViews/auth/forgot-password/new-password-form";
import RegisterCode from "../views/publicViews/auth/register-form/RegisterCode";

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
        path: path.PALETTE,
        element: <Palette />,
      },
      {
        path: path.PALETTE_DETAIL,
        element: <PaletteDetail />,
      },
    ],
  },
  {
    path: path.USERAUTH,
    element: <UserAuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: path.LOGIN,
        element: <UserAuthView />,
      },
      {
        path: path.REGISTER,
        element: <UserAuthView />,
      },
    ],
  },
  {
    path: path.FINALREGISTER,
    element: <FinalRegister />,
  },
  {
    path: path.REGISTERCODE,
    element: <RegisterCode />,
  },
  {
    path: path.FORGOTPASSWORD,
    element: <ForgotPassword />,
  },
  {
    path: path.NEWPASSWORD,
    element: <NewPassWord />,
  },
]);
export default router;
