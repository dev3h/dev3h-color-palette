import { createSlice } from "@reduxjs/toolkit";
import * as actions from "../../actions/app-actions";

const colorTagSlice = createSlice({
  name: "colorTags",
  initialState: {
    colorTags: [],
    isLoading: false,
    message: "",
    showMessage: false,
    redirect: "",
  },
  reducers: {},
  // Code logic xử lý async action
  extraReducers: (builder) => {
    // Bắt đầu thực hiện action (Promise pending)
    builder.addCase(actions.getColorTags.pending, (state) => {
      state.isLoading = true;
    });

    // Khi thực hiện action thành công (Promise fulfilled)
    builder.addCase(actions.getColorTags.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.colorTags = action.payload;
    });

    // Khi thực hiện action thất bại (Promise rejected)
    builder.addCase(actions.getColorTags.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.message = action.payload.message;
    });
  },
});

export default colorTagSlice.reducer;
