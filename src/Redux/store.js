import { configureStore } from "@reduxjs/toolkit";
import authApi from "./features/auth/authApi";
import authReducer from "./features/auth/authSlice";
import productsApi from "./features/Products/productsApi";
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware),
});
