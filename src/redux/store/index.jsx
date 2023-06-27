import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import colorTagSlice from "../reducers/app-reducers/ColorTagSlice";
import collectionTagSlice from "../reducers/app-reducers/CollectionTagSlice";
import paletteSlice from "../reducers/app-reducers/PaletteSlice";
import authSlice from "../reducers/auth-reducers/AuthSlice";

const commonConfig = {
  key: "userAuth",
  storage,
};

const userConfig = {
  ...commonConfig,
  whitelist: ["isLogin", "token"],
};

export const store = configureStore({
  reducer: {
    colorTags: colorTagSlice,
    collectionTags: collectionTagSlice,
    palettes: paletteSlice,
    user: persistReducer(userConfig, authSlice),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
