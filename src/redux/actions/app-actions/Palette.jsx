import { createAsyncThunk } from "@reduxjs/toolkit";
import * as services from "../../../services";

export const getPalettes = createAsyncThunk(
  "palettes/fetchPalettes",
  async (data, { rejectWithValue }) => {
    const response = await services.getPaletteData();
    if (!response?.success) return rejectWithValue(response);

    return response?.data;
  }
);
