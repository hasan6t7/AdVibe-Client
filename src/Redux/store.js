import { configureStore } from "@reduxjs/toolkit";
import authApi from "./features/auth/authApi";
import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartSlice";
import productsApi from "./features/Products/productsApi";
import reviewsApi from "./features/Reviews/reviewsApi";
import { orderApi } from "./features/orders/orderApi";
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    cart: cartReducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productsApi.middleware,
      reviewsApi.middleware
    ),
});
