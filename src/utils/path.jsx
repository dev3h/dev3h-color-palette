const path = {
  ALL: "*",
  PUBLIC: "/",
  HOME: "/",
  USERAUTH: "/user/auth",
  POPULAR: "/popular",
  RANDOM: "/random",
  COLLECTION: "/collection",
  PALETTE: "/palette",
};

path.LOGIN = `${path.USERAUTH}/login`;
path.REGISTER = `${path.USERAUTH}/register`;
path.FINALREGISTER = `${path.USERAUTH}/finalregister/:status`;
path.REGISTERCODE = `${path.USERAUTH}/register-code`;
path.FORGOTPASSWORD = `${path.USERAUTH}/reset`;
path.NEWPASSWORD = `${path.USERAUTH}/new-password/:token`;

path.PALETTE_DETAIL = `${path.PALETTE}/:slug`;

export default path;
