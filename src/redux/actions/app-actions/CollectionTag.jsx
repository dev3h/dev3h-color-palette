import { createAsyncThunk } from "@reduxjs/toolkit";
import * as services from "../../../services";

export const getCollectionTags = createAsyncThunk(
  "collectionTags/fetchCollectionTags",
  async (data, { rejectWithValue }) => {
    const response = await services.getCollectionTagData();

    if (!response?.success) return rejectWithValue(response);

    return response?.data;
  }
);
