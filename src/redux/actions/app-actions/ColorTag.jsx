import { createAsyncThunk } from "@reduxjs/toolkit";
import * as services from "../../../services";

export const getColorTags = createAsyncThunk(
  "colorTags/fetchColorTags",
  async (data, { rejectWithValue }) => {
    const response = await services.getColorTagData();
    if (!response?.success) return rejectWithValue(response);

    return response?.data;
  }
);
