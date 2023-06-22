import { configureStore } from "@reduxjs/toolkit";
import colorTagSlice from "../reducers/app-reducers/ColorTagSlice";

const store = configureStore({
  reducer: {
    colorTags: colorTagSlice,
  },
});

export default store;
