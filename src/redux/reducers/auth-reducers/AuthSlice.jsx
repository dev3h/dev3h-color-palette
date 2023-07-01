import { createSlice } from "@reduxjs/toolkit";
import * as authActions from "../../actions";
const authSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    isLogin: false,
    currentUser: null,
    token: null,
  },
  reducers: {
    StoreCurrentUserInfo: (state, action) => {
      state.isLogin = action?.payload?.isLogin;
      state.token = action?.payload?.token;
    },
    logout: (state) => {
      state.isLogin = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.isLoading = false;
          if (action.type === authActions.getCurrentLogin.fulfilled.type) {
            state.current = action.payload;
          } else if (action.type === authActions.logout.fulfilled.type) {
            state.isLogin = false;
            state.token = null;
          }
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const { StoreCurrentUserInfo, logout } = authSlice.actions;

export default authSlice.reducer;
