import { createSlice } from "@reduxjs/toolkit";
import * as actions from "../../actions/app-actions";

const paletteSlice = createSlice({
  name: "palettes",
  initialState: {
    palettes: [],
    isLoading: false,
    message: "",
    showMessage: false,
    redirect: "",
  },
  reducers: {},
  // Code logic xử lý async action
  extraReducers: (builder) => {
    builder.addCase(actions.getPalettes.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(actions.getPalettes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.palettes = action.payload;
    });

    builder.addCase(actions.getPalettes.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

export default paletteSlice.reducer;
