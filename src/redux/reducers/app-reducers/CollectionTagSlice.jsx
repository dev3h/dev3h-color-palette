import { createSlice } from "@reduxjs/toolkit";
import * as actions from "../../actions/app-actions";

const collectionTagSlice = createSlice({
  name: "collectionTags",
  initialState: {
    collectionTags: [],
    isLoading: false,
    message: "",
    showMessage: false,
    redirect: "",
  },
  reducers: {},
  // Code logic xử lý async action
  extraReducers: (builder) => {
    builder.addCase(actions.getCollectionTags.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(actions.getCollectionTags.fulfilled, (state, action) => {
      state.isLoading = false;
      state.collectionTags = action.payload;
    });

    builder.addCase(actions.getCollectionTags.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    });
  },
});

export default collectionTagSlice.reducer;
