import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./api";
import { myreducer } from "./reducer";

export const store = configureStore({
  reducer: {
    myapi: myApi.reducer,
    myreducer: myreducer.reducer,
  },
  middleware: (getDefaultMiddleware): any =>
    getDefaultMiddleware().concat(myApi.middleware),
});
