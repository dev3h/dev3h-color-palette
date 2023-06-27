import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    currentUser: null,
    token: null,
  },
  reducers: {
    StoreCurrentUserInfo: (state, action) => {
      state.isLogin = action?.payload?.isLogin;
      state.currentUser = action?.payload?.currentUser;
      state.token = action?.payload?.token;
    },
  },
});

export const { StoreCurrentUserInfo } = authSlice.actions;

export default authSlice.reducer;
