import { configureStore } from "@reduxjs/toolkit";
import colorTagSlice from "../reducers/app-reducers/ColorTagSlice";
import collectionTagSlice from "../reducers/app-reducers/CollectionTagSlice";
import paletteSlice from "../reducers/app-reducers/PaletteSlice";

const store = configureStore({
  reducer: {
    colorTags: colorTagSlice,
    collectionTags: collectionTagSlice,
    palettes: paletteSlice,
  },
});

export default store;
