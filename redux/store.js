import { configureStore } from "@reduxjs/toolkit";
import { duaApi } from "./services/duaApi";

export const store = configureStore({
  reducer: {
    [duaApi.reducerPath]: duaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(duaApi.middleware),
});
