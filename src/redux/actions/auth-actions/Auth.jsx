import { createAsyncThunk } from "@reduxjs/toolkit";
import * as services from "../../../services";

// export const StoreCurrentUserInfo = createAsyncThunk(
//   "userAuth/storeCurrentUserInfo",
//   async (data) => {
//     console.log("data", data);

//     // return response?.userData;
//   }
// );

// export const Register = createAsyncThunk(
//   "userAuth/register",
//   async (data, { rejectWithValue }) => {
//     const response = await services.register(data);
//     console.log("response register", response);

//     if (!response?.success) return rejectWithValue(response);

//     return response?.data;
//   }
// );
