import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice.js";
import { basicAPi } from "./basicApi.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [basicAPi.reducerPath]: basicAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(basicAPi.middleware),
});

setupListeners(store.dispatch);