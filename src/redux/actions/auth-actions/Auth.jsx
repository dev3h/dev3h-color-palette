import { createAsyncThunk } from "@reduxjs/toolkit";
import * as services from "../../../services";

export const getCurrentLogin = createAsyncThunk(
  "userAuth/current",
  async (data, { rejectWithValue }) => {
    const response = await services.getCurrentLogin();
    if (!response?.success) return rejectWithValue(response);
    return response?.rs;
  }
);
export const logout = createAsyncThunk(
  "userAuth/logout",
  async (data, { rejectWithValue }) => {
    const response = await services.logout();
    if (!response?.success) return rejectWithValue(response);
    return response?.mes;
  }
);
