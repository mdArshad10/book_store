import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice.js";
import { basicApi } from "./basicApi.js";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [basicApi.reducerPath]: basicApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(basicApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
