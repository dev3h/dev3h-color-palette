const path = {
  ALL: "*",
  PUBLIC: "/",
  HOME: "/",
  USERAUTH: "/user/auth/",
  LOGIN: "login",
  REGISTER: "register",
  FINALREGISTER: "/user/auth/finalregister/:status",
  FORGOTPASSWORD: "/user/auth/reset",
  NEWPASSWORD: "/user/auth/new-password/:token",
  POPULAR: "/popular",
  RANDOM: "/random",
  COLLECTION: "/collection",
  PALETTE_DETAIL: "/palette",
  PALETTE_DETAIL_ID: "/palette/:slug",
};

export default path;
